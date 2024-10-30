<template>
  <transition :name="animationType">
    <div :class="['pop-toast', type]" v-if="isOpen">
      <slot name="content">content</slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    timeout: {
      type: Number,
      default: 5 // 기본 5초
    },
    animationType: {
      type: String,
      default: 'slide-up'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true;
      window.setTimeout(() => {
        this.isOpen = false
      }, this.timeout * 1000)
    },
    close() {
      this.isOpen = false;
    }
  }
}
</script>