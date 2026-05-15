import { db, firebase } from "../firebaseConfig";
import { getUidAtual } from "../userSession";

export async function salvarDoacao(dados) {
  await db.collection("doacoes").add({
    uidDoador: getUidAtual() || `doador_temp_${Date.now()}`,
    tipoAlimento: dados.tipoAlimento,
    quantidade: dados.quantidade,
    horario: dados.horario,
    localizacao: dados.localizacao,
    observacoes: dados.observacoes,
    status: "disponivel",
    criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export async function buscarDoacoes() {
  const snapshot = await db
    .collection("doacoes")
    .where("status", "==", "disponivel")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function buscarHistorico(uidDoador) {
  const snapshot = await db
    .collection("doacoes")
    .where("uidDoador", "==", uidDoador)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function buscarDoacoesDoador(uidDoador) {
  const snapshot = await db
    .collection("doacoes")
    .where("uidDoador", "==", uidDoador)
    .where("status", "==", "disponivel")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function enviarSolicitacao(doacaoId, dados) {
  await db.collection("solicitacoes").add({
    doacaoId,
    uidReceptor: getUidAtual() || `receptor_temp_${Date.now()}`,
    nomeReceptor: dados.nomeReceptor || "Receptor",
    mensagem: dados.mensagem || "",
    tipoAlimento: dados.tipoAlimento || "",
    status: "pendente",
    criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export async function buscarSolicitacoesDoador(uidDoador) {
  const doacoesSnap = await db
    .collection("doacoes")
    .where("uidDoador", "==", uidDoador)
    .get();

  const doacaoIds = doacoesSnap.docs.map((doc) => doc.id);

  if (doacaoIds.length === 0) return [];

  const solicitacoes = [];

  for (const doacaoId of doacaoIds) {
    const snap = await db
      .collection("solicitacoes")
      .where("doacaoId", "==", doacaoId)
      .where("status", "==", "pendente")
      .get();

    snap.docs.forEach((doc) => {
      solicitacoes.push({ id: doc.id, ...doc.data() });
    });
  }

  return solicitacoes;
}

export async function aceitarSolicitacao(solicitacaoId, doacaoId, uidReceptor) {
  await db.collection("solicitacoes").doc(solicitacaoId).update({
    status: "aceita",
  });

  await db.collection("doacoes").doc(doacaoId).update({
    status: "concluida",
    uidReceptor,
  });
}

export async function recusarSolicitacao(solicitacaoId) {
  await db.collection("solicitacoes").doc(solicitacaoId).update({
    status: "recusada",
  });
}

export async function buscarTotalDoado(uidDoador) {
  const snapshot = await db
    .collection("doacoes")
    .where("uidDoador", "==", uidDoador)
    .where("status", "==", "concluida")
    .get();

  return snapshot.docs.length;
}

export async function buscarTotalSolicitacoes(uidDoador) {
  const doacoesSnap = await db
    .collection("doacoes")
    .where("uidDoador", "==", uidDoador)
    .get();

  const doacaoIds = doacoesSnap.docs.map((doc) => doc.id);

  if (doacaoIds.length === 0) return 0;

  let total = 0;

  for (const doacaoId of doacaoIds) {
    const snap = await db
      .collection("solicitacoes")
      .where("doacaoId", "==", doacaoId)
      .where("status", "==", "pendente")
      .get();

    total += snap.docs.length;
  }

  return total;
}

export async function buscarHistoricoReceptor(uidReceptor) {
  const snapshot = await db
    .collection("solicitacoes")
    .where("uidReceptor", "==", uidReceptor)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function buscarImpactoDoador(uidDoador) {
  const snapshot = await db
    .collection("doacoes")
    .where("uidDoador", "==", uidDoador)
    .get();

  const doacoes = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const doacoesConcluidas = doacoes.filter((d) => d.status === "concluida");

  const totalDoacoes = doacoes.length;
  const idsReceptores = [
    ...new Set(
      doacoesConcluidas.map((d) => d.uidReceptor).filter((id) => !!id)
    ),
  ];
  const pessoasBeneficiadasCount = idsReceptores.length;

  const totalKg = doacoesConcluidas.reduce((acc, d) => {
    const qtd = parseFloat(d.quantidade) || 0;
    return acc + qtd;
  }, 0);

  const alimentosMap = {};
  doacoesConcluidas.forEach((d) => {
    const tipo = d.tipoAlimento || "Outros";
    const qtd = parseFloat(d.quantidade) || 0;
    alimentosMap[tipo] = (alimentosMap[tipo] || 0) + qtd;
  });

  const alimentosBreakdown = Object.keys(alimentosMap).map((tipo) => ({
    label: tipo,
    value: `${alimentosMap[tipo]}kg`,
    width: `${Math.min((alimentosMap[tipo] / (totalKg || 1)) * 100, 100)}%`,
  }));

  const beneficiados = [];
  for (const uid of idsReceptores) {
    const userDoc = await db.collection("usuarios").doc(uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      const doacoesUsuario = doacoesConcluidas.filter(
        (d) => d.uidReceptor === uid
      ).length;
      beneficiados.push({
        id: uid,
        nome: userData.nome || "Usuário",
        descricao: `${doacoesUsuario} doações recebidas`,
        tag: userData.tipo === "instituicao" ? "Instituição" : "Individual",
        icon: userData.tipo === "instituicao" ? "🏢" : "🧑",
        tempo: "Concluída",
      });
    }
  }

  return {
    totalDoacoes,
    pessoasBeneficiadasCount,
    totalKg: `${totalKg}kg`,
    beneficiados,
    alimentosBreakdown,
  };
}
