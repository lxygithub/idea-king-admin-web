<template>
  <div class="build-footer">
    <span>Build：{{ buildTime }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const buildTime = computed(() => {
  const d = new Date(__BUILD_TIME__)
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}年${pad(d.getMonth() + 1)}月${pad(d.getDate())}日${pad(d.getHours())}:${pad(d.getMinutes())}`
})
</script>

<style scoped>
.build-footer {
  text-align: center;
  padding: 24px 0 12px;
  font-size: 12px;
  color: #6b7280;
}
</style>
