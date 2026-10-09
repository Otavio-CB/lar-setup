<template>
  <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-zinc-200">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h1 class="text-xl font-semibold tracking-tight text-zinc-900">Central do Primeiro Imóvel</h1>
        </div>
        <p class="text-xs text-zinc-500">Gestão de enxoval essencial, utilidades, mala de entrada, medidas e vistoria</p>
      </div>
    </div>

    <!-- Ações Gerais -->
    <div class="flex flex-wrap items-center gap-2">
      <button @click="restaurarTudoPadrao" title="Recarregar base recomendada" class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition shadow-xs">
        <svg class="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        Restaurar Padrão
      </button>

      <button @click="exportarBackup" title="Baixar arquivo JSON de backup" class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition shadow-xs">
        <svg class="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Exportar
      </button>

      <label class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition shadow-xs cursor-pointer">
        <svg class="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
        </svg>
        Importar
        <input type="file" @change="importarBackup" class="hidden" accept=".json">
      </label>

      <button @click="signOutUser" title="Sair da conta" class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition shadow-xs">
        <svg class="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        Sair
      </button>
    </div>
  </header>
</template>

<script setup>
import { restaurarTudoPadrao } from '../../stores/appState';
import { exportarBackup, importarBackup } from '../../composables/useBackup';
import { signOutUser } from '../../composables/useAuth';
</script>
