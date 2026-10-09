<template>
  <div v-if="!firebaseConfigurado" class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md text-center bg-white border border-zinc-200 rounded-2xl shadow-xs p-6">
      <p class="text-sm font-semibold text-zinc-900 mb-2">Configuração do Firebase pendente</p>
      <p class="text-xs text-zinc-500">
        Crie um arquivo <code class="bg-zinc-100 px-1 rounded">.env</code> na raiz do projeto com as chaves do seu
        projeto Firebase (copie de <code class="bg-zinc-100 px-1 rounded">.env.example</code>) e reinicie o
        <code class="bg-zinc-100 px-1 rounded">npm run dev</code>.
      </p>
    </div>
  </div>

  <div v-else-if="carregandoAuth" class="min-h-screen flex items-center justify-center">
    <p class="text-xs text-zinc-500">Carregando...</p>
  </div>

  <LoginView v-else-if="!user || !autorizado" />

  <div v-else class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <AppHeader />
    <NavTabs />

    <InventarioTab v-if="abaAtiva === 'itens'" />
    <OperacaoTab v-if="abaAtiva === 'operacao'" />
    <ChecklistTab v-if="abaAtiva === 'checklist'" />
    <MedidasTab v-if="abaAtiva === 'medidas'" />
    <VistoriaTab v-if="abaAtiva === 'vistoria'" />

    <ModalItem />
    <ModalMedida />
    <ModalVistoria />
    <ToastNotification />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { user, autorizado, carregandoAuth, firebaseConfigurado } from './composables/useAuth';
import { iniciarSincronizacao } from './composables/useFirestoreSync';
import { abaAtiva } from './stores/appState';

import LoginView from './components/auth/LoginView.vue';
import AppHeader from './components/layout/AppHeader.vue';
import NavTabs from './components/layout/NavTabs.vue';
import ToastNotification from './components/layout/ToastNotification.vue';
import ModalItem from './components/modals/ModalItem.vue';
import ModalMedida from './components/modals/ModalMedida.vue';
import ModalVistoria from './components/modals/ModalVistoria.vue';
import InventarioTab from './components/inventario/InventarioTab.vue';
import OperacaoTab from './components/operacao/OperacaoTab.vue';
import ChecklistTab from './components/checklist/ChecklistTab.vue';
import MedidasTab from './components/medidas/MedidasTab.vue';
import VistoriaTab from './components/vistoria/VistoriaTab.vue';

onMounted(() => {
  iniciarSincronizacao();
});
</script>
