<template>
  <div class="loading" v-if="isLoading">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    // 페이지 로드 시 로딩 활성화 & 스크롤 막기
    // lockScroll은 테스트를 위해 주석처리~
    this.isLoading = true;
    // this.lockScroll(true);

    // 페이지 로드 완료 시 로딩 비활성화
    this.$nextTick(() => {
      // this.isLoading = false;
      // this.lockScroll(false);
    });
  },
  watch: {
    // 페이지 전환 시 로딩 상태를 감지
    '$route': function () {
      this.isLoading = true;
      // this.lockScroll(true);
    },
  },
  beforeDestroy() {
    // 컴포넌트가 파괴되기 전에 로딩 상태를 false로 설정
    this.isLoading = false;
    // this.lockScroll(false);
  },
  methods: {
    lockScroll(lock) {
      if (lock) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
};
</script>