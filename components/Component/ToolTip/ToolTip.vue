<template>
  <div :class="['tooltip-box']" v-if="isVisible">
    <button type="button" class="btn-close" @click="isVisible = false">닫기</button>
    <div :class="['tooltip-cont', position]" @click="isVisible = false">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isVisible: true
    }
  }
}
</script>