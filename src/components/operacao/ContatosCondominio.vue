<template>
  <section class="bg-white border border-zinc-200 rounded-xl p-5 shadow-xs">
    <h2 class="text-sm font-semibold text-zinc-900 border-b border-zinc-100 pb-2 mb-3">Contatos Críticos & Regras de Acesso</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
      <div>
        <label class="block text-[11px] font-medium text-zinc-500 mb-0.5">Portaria / Guarita</label>
        <input v-model="contatosCondominio.portaria" placeholder="Ramal ou Celular" class="w-full border border-zinc-300 rounded p-2 outline-none focus:border-zinc-800">
      </div>
      <div>
        <label class="block text-[11px] font-medium text-zinc-500 mb-0.5">Zelador / Síndico</label>
        <input v-model="contatosCondominio.zelador" placeholder="Nome e WhatsApp" class="w-full border border-zinc-300 rounded p-2 outline-none focus:border-zinc-800">
      </div>
      <div>
        <label class="block text-[11px] font-medium text-zinc-500 mb-0.5">Chaveiro 24 Horas</label>
        <input v-model="contatosCondominio.chaveiro" placeholder="Telefone de emergência" class="w-full border border-zinc-300 rounded p-2 outline-none focus:border-zinc-800">
      </div>
      <div>
        <label class="block text-[11px] font-medium text-zinc-500 mb-0.5">Horário de Barulho / Mudança</label>
        <input v-model="contatosCondominio.horarioMudanca" placeholder="Ex: 8h às 17h (dias úteis)" class="w-full border border-zinc-300 rounded p-2 outline-none focus:border-zinc-800">
      </div>
    </div>
  </section>
</template>

<script setup>
import { contatosCondominio } from '../../stores/appState';
</script>
