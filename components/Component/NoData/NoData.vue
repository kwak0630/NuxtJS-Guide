<template>
  <div :class="['nodata-box']">
    <i v-if="ico" :class="icoClass"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    ico: {
      type: String,
      default: ''
    }
  },
  computed: {
    icoClass() {
      return `ico-${this.ico}`;
    }
  }
}
</script>