<template>
  <button type="button" class="btn-back" @click="goToPrev">
    <i class="ico-arrow"></i>
    <span class="hidden">이전페이지로 이동</span>
  </button>
</template>

<script>
export default {
  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
  }
}
</script>