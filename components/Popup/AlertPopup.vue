<template>
  <div :class="['pop-layer', type]" v-if="isOpen">
    <div class="dim" @click.self="$emit('close')"></div>
    <div class="pop-wrap">
      <div v-if="$slots.header" class="pop-header">
        <slot name="header"></slot>
      </div>
      <div class="pop-content">
        <slot name="content">content</slot>
      </div>
      <div v-if="$slots.buttons" class="pop-footer btn-wrap">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    isOpen(lockScroll) {
      if (lockScroll) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
}
</script>