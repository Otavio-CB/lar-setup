<template>
  <div v-if="modalVistoriaAberto" class="fixed inset-0 bg-zinc-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-40">
    <div class="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl border border-zinc-200" @click.stop>
      <h3 class="text-sm font-semibold text-zinc-900 mb-3">Registrar Apontamento</h3>
      <form @submit.prevent="salvarModalVistoria" class="space-y-3 text-xs">
        <div>
          <label class="block font-medium text-zinc-700 mb-1">Cômodo *</label>
          <input v-model="formVistoria.comodo" required placeholder="Ex: Banheiro" class="w-full border border-zinc-300 rounded-lg p-2 outline-none">
        </div>
        <div>
          <label class="block font-medium text-zinc-700 mb-1">Descrição do Defeito *</label>
          <input v-model="formVistoria.defeito" required placeholder="Ex: Janela emperrando ao fechar" class="w-full border border-zinc-300 rounded-lg p-2 outline-none">
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Gravidade</label>
            <select v-model="formVistoria.gravidade" class="w-full border border-zinc-300 rounded-lg p-2 outline-none">
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <div>
            <label class="block font-medium text-zinc-700 mb-1">Prazo de Envio</label>
            <input v-model="formVistoria.prazo" placeholder="Ex: Até 5 dias úteis" class="w-full border border-zinc-300 rounded-lg p-2 outline-none">
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button type="button" @click="modalVistoriaAberto = false" class="px-3 py-1.5 text-zinc-600">Cancelar</button>
          <button type="submit" class="px-3 py-1.5 bg-zinc-900 text-white font-medium rounded-lg">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { modalVistoriaAberto, formVistoria, salvarModalVistoria } from '../../stores/appState';
</script>
