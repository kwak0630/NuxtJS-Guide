<template>
  <div class="video-box">
    <iframe
      :src="videoUrl"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      title="Vimeo Video"
      class="video"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
  computed: {
    videoUrl() {
      return `https://player.vimeo.com/video/${this.videoId}`;
    },
  },
};
</script>