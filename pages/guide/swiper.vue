<template>
	<div class="guide-wrap">
    <AsideNav/>
    <div class="guide-content">
      <h2 class="guide-title">Swiper</h2>
      <div class="guide-box swiper">
        <h3 class="guide-title2">Basic</h3>
        <swiper :options="swiperBasic">
          <SwiperSlide v-for="slide in 3" :key="slide">
            <strong>{{ slide }}</strong>
          </SwiperSlide>

          <!-- pagination -->
          <div slot="pagination" class="swiper-pagination"></div>
          
          <!-- navigation -->
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
        <br />
        <swiper :options="swiperOption3">
          <SwiperSlide v-for="slide in 3" :key="slide">
            <strong>{{ slide }}</strong>
          </SwiperSlide>

          <!-- navigation -->
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
        <br />
        <swiper :options="swiperOption4">
          <SwiperSlide v-for="slide in 3" :key="slide">
            <strong>{{ slide }}</strong>
          </SwiperSlide>

          <!-- navigation -->
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </div>

      <div class="guide-box swiper">
        <h3 class="guide-title2">Thumbnail</h3>
        <swiper
          :options="swiperThumbsTop"
          ref="swiperThumbsTop"
        >
          <swiper-slide v-for="i in 5" :key="'top'+i">
            <strong>{{ i }}</strong>
          </swiper-slide>

          <!-- navigation -->
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
        <swiper
          :options="swiperThumbs"
          class="swiper-thumbs"
          ref="swiperThumbs"
        >
          <swiper-slide v-for="i in 5" :key="'thumb'+i">
            <strong>{{ i }}</strong>
          </swiper-slide>
        </swiper>
      </div>
      
      <div class="guide-box swiper">
        <h3 class="guide-title2">Options ~</h3>
        <div class="swiper-box">
          slidesPerView: 1, // 보여질 갯수
          spaceBetween: 0, // 슬라이드 사이 여백
          navigation: {
            nextEl: ".swiper-button-next", // 이전 버튼
            prevEl: ".swiper-button-prev", // 다음 버튼
          },
          pagination: {
            el: '.swiper-pagination', //페이지네이션
            type: 'progressbar',
            type: 'fraction',
            clickable: true 
          },
          loop: true, // 반복
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          effect: 'fade',
          mousewheel: {
            invert: true
          },
          breakpoints: { // 반응형
            320: {
              slidesPerView: 1.4 
            },
            640: {
              slidesPerView: 3.3
            }
          },

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default ({
  components: { 
    Swiper, 
    SwiperSlide 
  },
  data() {
    return {
      swiperBasic: {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      },
      swiperOption3: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          prevEl: 'swiper-button-prev',
          nextEl: 'swiper-button-next'
        },
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      },
      swiperOption4: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        navigation: {
          prevEl: 'swiper-button-prev',
          nextEl: 'swiper-button-next'
        },
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      },

      swiperThumbsTop: {
        initialSlide: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        thumbs: {
          swiper: null
        }
      },
      swiperThumbs: {
        spaceBetween: 10,
        slidesPerView: 3,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        initialSlide: 0, 
        slideToClickedSlide: true,
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const thumbsSwiper = this.$refs.swiperThumbs.$swiper
      const thumbsTopSwiper = this.$refs.swiperThumbsTop.$swiper
      thumbsTopSwiper.thumbs.swiper = thumbsSwiper

      // 썸네일 클릭 이벤트 추가
      thumbsSwiper.on('click', () => {
        const clickedIndex = thumbsSwiper.clickedIndex
        if (typeof clickedIndex !== 'undefined') {
          thumbsTopSwiper.slideTo(clickedIndex)
        }
      })

      // 상단 슬라이더 변경 시 썸네일 업데이트
      thumbsTopSwiper.on('slideChange', () => {
        thumbsSwiper.slideTo(thumbsTopSwiper.activeIndex)
      })

      // 초기 인덱스 설정
      thumbsSwiper.slideTo(0)
      thumbsTopSwiper.slideTo(0)
    })
  }
})
</script>