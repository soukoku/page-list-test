<script setup lang="ts">
import { ref } from 'vue'

interface Page {
  height: number
  width: number
  number: number,
  url: string
}

const samplePages = [{
  width: 1080,
  height: 1184,
  url: '/samples/0.jpg'
}, {
  width: 800,
  height: 450,
  url: '/samples/1.jpg'
}, {
  width: 495,
  height: 485,
  url: '/samples/2.jpg'
}, {
  width: 700,
  height: 761,
  url: '/samples/3.jpg'
}, {
  width: 604,
  height: 453,
  url: '/samples/4.jpg'
}, {
  width: 1398,
  height: 794,
  url: '/samples/5.jpg'
}, {
  width: 425,
  height: 598,
  url: '/samples/6.jpg'
}, {
  width: 500,
  height: 829,
  url: '/samples/7.jpg'
}]

const pages = [] as Page[]
while (pages.length < 2000) {
  pages.push({ ...samplePages[pages.length % samplePages.length], number: pages.length + 1 })
}

const wrap = ref(false)
const boundSize = ref(500)
const maxBound = Math.max(window.screen.width, window.screen.height)

</script>

<template>
  <div class="flex-none">
    toolbar:
    <label>Size</label>
    <input type="number" v-model="boundSize" min="250" :max="maxBound" step="10" />

    <label>
      <input type="checkbox" v-model="wrap">
      Wrap
    </label>
  </div>
  <main class="flex flex-auto p-1 overflow-auto border-2 border-green-700"
    :class="{ 'flex-col items-center': !wrap, 'flex-wrap': wrap }">
    <div class="relative flex flex-col items-center justify-center m-1 mb-12 border-2 border-red-700"
      :style="{ width: boundSize + 'px', height: boundSize + 'px' }" v-for="pg in pages" :key="pg.number">
      <img class="flex-none border-2 border-blue-700" :src="pg.url"
        :style="{ maxWidth: boundSize + 'px', maxHeight: boundSize + 'px' }" />
      <div class="absolute border-2 border-gray-700 -bottom-8">
        Page {{ pg.number }}
      </div>
    </div>

  </main>
</template>
