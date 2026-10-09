<template>
  <div v-if="modalMedidaAberto" class="fixed inset-0 bg-zinc-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-40">
    <div class="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl border border-zinc-200" @click.stop>
      <h3 class="text-sm font-semibold text-zinc-900 mb-3">Registrar Medida de Vão</h3>
      <form @submit.prevent="salvarModalMedida" class="space-y-3 text-xs">
        <div>
          <label class="block font-medium text-zinc-700 mb-1">Local / Ponto *</label>
          <input v-model="formMedida.local" required placeholder="Ex: Vão da Lava e Seca" class="w-full border border-zinc-300 rounded-lg p-2 outline-none">
        </div>
        <div>
          <label class="block font-medium text-zinc-700 mb-1">Dimensões Limite (L x A x P) *</label>
          <input v-model="formMedida.dimensoes" required placeholder="Ex: 65cm (L) x 90cm (A)" class="w-full border border-zinc-300 rounded-lg p-2 outline-none">
        </div>
        <div>
          <label class="block font-medium text-zinc-700 mb-1">Observação</label>
          <input v-model="formMedida.descricao" placeholder="Ex: Altura do ponto de água" class="w-full border border-zinc-300 rounded-lg p-2 outline-none">
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button type="button" @click="modalMedidaAberto = false" class="px-3 py-1.5 text-zinc-600">Cancelar</button>
          <button type="submit" class="px-3 py-1.5 bg-zinc-900 text-white font-medium rounded-lg">Salvar Medida</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { modalMedidaAberto, formMedida, salvarModalMedida } from '../../stores/appState';
</script>
