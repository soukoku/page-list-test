<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { register, unregister } from './idleRoutine'

onMounted(() => {
  register()
})
onBeforeUnmount(() => {
  unregister()
})

</script>
<template>
  <div>
    Do some action here

    <input type="text" />
  </div>
</template>
