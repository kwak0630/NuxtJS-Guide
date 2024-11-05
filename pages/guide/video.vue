<template>
	<div class="guide-wrap">
    <AsideNav/>
    <div class="guide-content">
      <h2 class="guide-title">Video</h2>
      <div class="guide-box video">
        <h3 class="guide-title2">Basic Vimeo</h3>
        <Vimdo videoId="844128999" />
      </div>
      <div class="guide-box video">
        <h3 class="guide-title2">Basic Youtube</h3>
        <Youtube videoId="nobaBENXGho" />
      </div>
    </div>
  </div>
</template>

<script>
import Vimdo from '@/components/Component/VideoPlayer/Vimdo.vue';
import Youtube from '@/components/Component/VideoPlayer/Youtube.vue';

export default ({  
  components: {
    Vimdo,
    Youtube
  },
  data() {
    return {
    }
  }
})
</script>