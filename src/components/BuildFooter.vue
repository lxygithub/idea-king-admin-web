<template>
  <div class="build-footer">
    <span>Last Build：{{ buildTime }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const buildTime = computed(() => {
  // Convert UTC ISO to China timezone (UTC+8)
  const d = new Date(__BUILD_TIME__)
  const opts = { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }
  const parts = new Intl.DateTimeFormat('zh-CN', opts).formatToParts(d)
  const m = {}
  parts.forEach(p => { if (p.type !== 'literal') m[p.type] = p.value })
  return `${m.year}年${m.month}月${m.day}日${m.hour}:${m.minute}`
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
