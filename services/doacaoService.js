import firebase from 'firebase';
import { db } from '../firebaseConfig';
import { getUidAtual } from '../userSession';

export async function salvarDoacao(dados) {
  await db.collection('doacoes').add({
    uidDoador: getUidAtual() || `doador_temp_${Date.now()}`,
    tipoAlimento: dados.tipoAlimento,
    quantidade: dados.quantidade,
    horario: dados.horario,
    localizacao: dados.localizacao,
    observacoes: dados.observacoes,
    status: 'disponivel',
    criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export async function buscarDoacoes() {
  const snapshot = await db
    .collection('doacoes')
    .where('status', '==', 'disponivel')
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function buscarHistorico(uidDoador) {
  const snapshot = await db
    .collection('doacoes')
    .where('uidDoador', '==', uidDoador)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function buscarDoacoesDoador(uidDoador) {
  const snapshot = await db
    .collection('doacoes')
    .where('uidDoador', '==', uidDoador)
    .where('status', '==', 'disponivel')
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
