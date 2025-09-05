<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { Modal } from 'bootstrap'

const props = defineProps({
  visible: { type: Boolean, default: false },
  title: { type: String, default: '确认操作' },
  content: { type: String, default: '确定要执行此操作吗？' },
})

const emit = defineEmits(['confirm', 'update:visible'])

const innerVisible = ref(props.visible)
const modalId = `bs-confirm-${Math.random().toString(36).slice(-8)}`
let modalInstance = null

watch(
  () => props.visible,
  (val) => {
    innerVisible.value = val
    if (modalInstance) val ? modalInstance.show() : modalInstance.hide()
  },
  { immediate: true },
)

onMounted(() => {
  const modalElement = document.getElementById(modalId)
  if (!modalElement) return

  modalInstance = new Modal(modalElement, {
    backdrop: 'static',
    keyboard: false,
  })

  // ✅ 监听 bootstrap 的隐藏事件
  modalElement.addEventListener('hidden.bs.modal', handleModalClose)
})

onUnmounted(() => {
  if (modalInstance) {
    modalInstance.dispose()
    modalInstance = null
  }
  const modalElement = document.getElementById(modalId)
  modalElement?.removeEventListener('hidden.bs.modal', handleModalClose)
})

const handleConfirm = () => {
  emit('confirm', true)
  innerVisible.value = false
  emit('update:visible', false)
}
const handleCancel = () => {
  emit('confirm', false)
  innerVisible.value = false
  emit('update:visible', false)
}
const handleModalClose = () => {
  emit('confirm', false)
  innerVisible.value = false
  emit('update:visible', false)
}
</script>

<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    :class="{ show: innerVisible }"
    :style="{ display: innerVisible ? 'block' : 'none' }"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-0 border">
        <!-- 标题栏 -->
        <div class="modal-header border-bottom">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="handleCancel"></button>
        </div>

        <!-- 内容 -->
        <div class="modal-body py-4">
          <p class="text-gray-700">{{ content }}</p>
        </div>

        <!-- 底部按钮 -->
        <div class="modal-footer border-top justify-content-end gap-3">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-0 px-4"
            @click="handleCancel"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary rounded-0 px-4" @click="handleConfirm">
            确认
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
