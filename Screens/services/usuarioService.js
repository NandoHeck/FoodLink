import firebase from 'firebase';
import { db } from '../firebaseConfig';

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