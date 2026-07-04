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
      <el-image
        v-if="fileId"
        :src="fileUrl"
        fit="contain"
        class="preview-image"
        :preview-src-list="[fileUrl]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
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

// ESC 键返回
onMounted(() => {
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      goBack()
    }
  }
  document.addEventListener('keydown', handleKeydown)
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
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
