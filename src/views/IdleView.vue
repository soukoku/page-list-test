<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { register, unregister } from './idleRoutine'

const lastUsed = useStorage('lastUsed', new Date().getTime())
const idle = ref(false)

let idleHandle: number | undefined
onMounted(() => {
  register()
  idleHandle = setInterval(checkIdle, 1000)
})
onBeforeUnmount(() => {
  unregister()
  clearInterval(idleHandle)
  lastUsed.value = null
})

function checkIdle() {
  const diff = new Date().getTime() - lastUsed.value
  idle.value = diff > 5000//5 sec
}
</script>
<template>
  <div>
    <h1>storage value = {{ lastUsed }}</h1>
    <h1>idle value = {{ idle }}</h1>
    <!-- <button @click="changeByRef">Change By ref</button> -->

    <iframe src="/idle2" class="border border-gray-700 h-72 w-72"></iframe>
  </div>
</template>
