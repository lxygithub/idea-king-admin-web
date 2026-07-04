<template>
  <div class="image-preview-page">
    <div class="preview-header">
      <el-button class="back-btn" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        返回
      </el-button>
      <span class="file-name">{{ fileName }}</span>
    </div>
    <div class="preview-content">
      <img
        v-if="fileId"
        :src="fileUrl"
        class="preview-image"
        alt="预览图片"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()

const fileId = computed(() => route.query.id)
const fileName = computed(() => route.query.name || '图片预览')

const fileApiBase = '/api'
const fileUrl = computed(() => {
  const token = localStorage.getItem('token') || ''
  return `${fileApiBase}/files/${fileId.value}/download?token=${token}`
})

const goBack = () => {
  router.back()
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    goBack()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.image-preview-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 99999;
  display: flex;
  flex-direction: column;
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #333;
  flex-shrink: 0;
}

.back-btn {
  background: transparent;
  border: 1px solid #555;
  color: #fff;
}

.back-btn:hover {
  background: #333;
  border-color: #666;
}

.file-name {
  color: #fff;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.preview-content {
  flex: 1;
  overflow: auto;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.preview-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
