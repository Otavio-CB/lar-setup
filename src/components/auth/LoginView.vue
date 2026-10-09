<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-sm w-full bg-white border border-zinc-200 rounded-2xl shadow-xs p-6 text-center">
      <div class="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs mx-auto mb-4">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      </div>
      <h1 class="text-base font-semibold text-zinc-900">Central do Primeiro Imóvel</h1>

      <template v-if="!user">
        <p class="text-xs text-zinc-500 mt-2 mb-5">Faça login com sua conta Google para acessar.</p>
        <button
          @click="signInWithGoogle"
          class="inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 text-xs font-semibold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition shadow-xs"
        >
          Entrar com Google
        </button>
      </template>

      <template v-else>
        <p class="text-xs text-rose-600 mt-2 mb-5">
          Acesso não autorizado. Entre em contato com o administrador para liberar seu email.
        </p>
        <button
          @click="signOutUser"
          class="inline-flex items-center justify-center gap-2 w-full px-3 py-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition shadow-xs"
        >
          Sair
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { user, signInWithGoogle, signOutUser } from '../../composables/useAuth';
</script>
