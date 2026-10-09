import { ref, computed } from 'vue';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider, firebaseConfigurado } from '../firebase';
import { EMAILS_AUTORIZADOS } from '../constants/allowlist';
import { exibirToast } from './useToast';

export { firebaseConfigurado };

export const user = ref(null);
export const carregandoAuth = ref(true);

export const autorizado = computed(() => !!user.value && EMAILS_AUTORIZADOS.includes(user.value.email));

if (firebaseConfigurado) {
  onAuthStateChanged(auth, (u) => {
    user.value = u;
    carregandoAuth.value = false;
  });
} else {
  carregandoAuth.value = false;
}

export const signInWithGoogle = async () => {
  if (!firebaseConfigurado) {
    exibirToast('Firebase não configurado — veja o arquivo .env.example.');
    return;
  }
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    exibirToast('Erro ao entrar com Google.');
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    exibirToast('Erro ao sair da conta.');
  }
};
