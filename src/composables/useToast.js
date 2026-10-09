import { ref } from 'vue';

export const toast = ref({ visivel: false, mensagem: '' });

export const exibirToast = (msg) => {
  toast.value = { visivel: true, mensagem: msg };
  setTimeout(() => { toast.value.visivel = false; }, 3000);
};
