<template>
  <div v-if="modalItemAberto" class="fixed inset-0 bg-zinc-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-40">
    <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-zinc-200" @click.stop>
      <div class="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
        <h2 class="text-base font-semibold text-zinc-900">{{ editandoItemId ? 'Editar Item' : 'Novo Item no Enxoval' }}</h2>
        <button @click="modalItemAberto = false" class="text-zinc-400 hover:text-zinc-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <form @submit.prevent="salvarModalItem" class="space-y-4 text-xs">
        <div>
          <label class="block font-medium text-zinc-700 mb-1">Título do Item *</label>
          <input v-model="formItem.nome" required type="text" placeholder="Ex: Chuveiro Eletrônico 220V" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800">
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Cômodo</label>
            <select v-model="formItem.categoria" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800">
              <option v-for="c in categorias" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Fase de Aquisição</label>
            <select v-model="formItem.fase" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800">
              <option value="Fase 1: Dia Zero">Fase 1: Dia Zero (Imediato)</option>
              <option value="Fase 2: Estrutura">Fase 2: Estrutura</option>
              <option value="Fase 3: Conforto">Fase 3: Conforto</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Voltagem</label>
            <select v-model="formItem.voltagem" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800">
              <option value="">Não aplicável</option>
              <option value="110V (127V)">110V (127V)</option>
              <option value="220V">220V</option>
              <option value="Bivolt">Bivolt</option>
              <option value="20A (Pino Grosso)">20A (Pino Grosso)</option>
            </select>
          </div>
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Status</label>
            <select v-model="formItem.status" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800">
              <option value="A Comprar">A Comprar</option>
              <option value="Reservado">Reservado</option>
              <option value="Comprado">Comprado</option>
              <option value="Ganho">Ganho</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Qtd</label>
            <input v-model.number="formItem.quantidade" min="1" type="number" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800">
          </div>
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Preço Est. (R$)</label>
            <input v-model.number="formItem.precoEstimado" type="number" step="0.01" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800">
          </div>
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Preço Real (R$)</label>
            <input v-model.number="formItem.precoPago" type="number" step="0.01" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800">
          </div>
        </div>
        <div>
          <label class="block font-medium text-zinc-700 mb-1">Observações Técnicas</label>
          <textarea v-model="formItem.observacao" rows="2" class="w-full text-xs border border-zinc-300 rounded-lg p-2.5 outline-none focus:border-zinc-800"></textarea>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button type="button" @click="modalItemAberto = false" class="px-3 py-1.5 text-zinc-600 hover:bg-zinc-100 rounded-lg">Cancelar</button>
          <button type="submit" class="px-4 py-2 font-medium bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg">Salvar Item</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { modalItemAberto, editandoItemId, formItem, categorias, salvarModalItem } from '../../stores/appState';
</script>
