<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

var mainNavs = [
  { text: 'Pages', route: { name: 'pages' } },
  { text: 'Idle', route: { name: 'idle' } },
  // { text: 'Storage2', route: { name: 'storage2' } },
  { text: 'About', route: { name: 'about' } }]
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <header class="flex-none border-b border-gray-200">
      <nav class="flex items-center justify-between p-6 py-3 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div class="flex items-center gap-x-12">
          <RouterLink v-for="nav in mainNavs" :key="nav.text" :to="nav.route"
            class="text-sm font-semibold leading-6 text-gray-900">{{ nav.text }}
          </RouterLink>
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
