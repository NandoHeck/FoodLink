import { db, firebase } from '../firebaseConfig';


export async function salvarUsuario(uid, dados) {
  await db.collection('usuarios').doc(uid).set({
    nome: dados.nome,
    email: dados.email,
    telefone: dados.telefone,
    localizacao: dados.localizacao,
    tipo: dados.tipo,
    criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export async function buscarUsuario(uid) {
  const doc = await db.collection('usuarios').doc(uid).get();
  if (doc.exists) {
    return { uid: doc.id, ...doc.data() };
  }
  return null;
}


export async function buscarUsuarioPorEmail(email) {
  const snapshot = await db
    .collection('usuarios')
    .where('email', '==', email)
    .get();

  if (!snapshot.empty) {
    const doc = snapshot.docs[0];
    return { uid: doc.id, ...doc.data() };
  }

  return null;
}
