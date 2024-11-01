<template>
  <button type="button" class="btn-top" v-show="isVisible" @click="goToTop">
    <i class="ico-arrow"></i>
    <span class="hidden">상단으로 이동</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: null,
      isVisible: false,
      visibleDistance: 200, // 스크롤 200픽셀 아래일 경우 isVisible 생김
    }
  },
  
  mounted() {
    window.addEventListener('scroll', this.scrollListener, true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      this.scrollTop = window.pageYOffset || 0;

      // 버튼 표시 제어
      this.isVisible = this.scrollTop > this.visibleDistance;
    },
    goToTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 200);
      }, 30);
    },
  }
}
</script>