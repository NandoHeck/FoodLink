import { auth, db, firebase } from '../firebaseConfig';

/**
 * Realiza o login do usuário com e-mail e senha.
 */
export async function loginUsuario(email, senha) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, senha);
    const user = userCredential.user;
    
    // Busca os dados adicionais do usuário no Firestore
    const doc = await db.collection('usuarios').doc(user.uid).get();
    if (doc.exists) {
      return { uid: user.uid, ...doc.data() };
    }
    
    throw new Error("Dados do usuário não encontrados.");
  } catch (error) {
    console.error("Erro no login:", error.code, error.message);
    throw error;
  }
}

/**
 * Cria um novo usuário no Firebase Auth e salva dados extras no Firestore.
 */
export async function cadastrarUsuario(email, senha, dadosAdicionais) {
  try {
    // 1. Cria o usuário no Firebase Authentication
    const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
    const user = userCredential.user;

    // 2. Salva os dados adicionais no Firestore usando o UID gerado
    await db.collection('usuarios').doc(user.uid).set({
      nome: dadosAdicionais.nome,
      email: email,
      telefone: dadosAdicionais.telefone,
      localizacao: dadosAdicionais.localizacao,
      tipo: dadosAdicionais.tipo,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
    });

    return { uid: user.uid, ...dadosAdicionais, email };
  } catch (error) {
    console.error("Erro no cadastro:", error.code, error.message);
    throw error;
  }
}

/**
 * Desloga o usuário atual.
 */
export async function deslogarUsuario() {
  await auth.signOut();
}

/**
 * Envia um e-mail de recuperação de senha.
 */
export async function recuperarSenha(email) {
  try {
    await auth.sendPasswordResetEmail(email);
  } catch (error) {
    console.error("Erro na recuperação de senha:", error.code, error.message);
    throw error;
  }
}

