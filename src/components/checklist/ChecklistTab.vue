<template>
  <main class="my-6 space-y-4">
    <div class="p-4 bg-white border border-zinc-200 rounded-xl shadow-xs flex items-center justify-between">
      <div>
        <h2 class="text-sm font-semibold text-zinc-900">Burocracia & Instalações Iniciais</h2>
        <p class="text-xs text-zinc-500">Ações para garantir fornecimento de luz, água/gás, internet e chaves seguras.</p>
      </div>
      <button @click="restaurarTarefasPadrao" class="text-xs text-zinc-600 border border-zinc-300 rounded-lg px-3 py-1.5 hover:bg-zinc-50">
        Resetar Tarefas
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="grupo in gruposTarefas" :key="grupo.nome" class="bg-white border border-zinc-200 rounded-xl p-5 shadow-xs">
        <h3 class="text-xs font-semibold uppercase tracking-wider text-zinc-500 border-b border-zinc-100 pb-2 mb-3 flex items-center justify-between">
          {{ grupo.nome }}
          <span class="font-normal text-zinc-400">{{ grupo.tarefas.filter(t => t.feita).length }}/{{ grupo.tarefas.length }}</span>
        </h3>
        <ul class="space-y-3">
          <li v-for="tarefa in grupo.tarefas" :key="tarefa.id" class="flex items-start gap-2.5 text-xs">
            <input type="checkbox" v-model="tarefa.feita" class="mt-0.5 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-800">
            <div class="flex-1">
              <span :class="{'line-through text-zinc-400': tarefa.feita, 'text-zinc-800 font-medium': !tarefa.feita}">
                {{ tarefa.titulo }}
              </span>
              <p v-if="tarefa.dica" class="text-[11px] text-zinc-400 mt-0.5">{{ tarefa.dica }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
import { gruposTarefas, restaurarTarefasPadrao } from '../../stores/appState';
</script>
