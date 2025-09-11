<template>
  <div class="video-container">
    <video
      muted
      autoplay
      loop
      src="/src/assets/video/2024 MercedesAMG GT SO AMG Commercial1080p.mp4"
    ></video>
  </div>
</template>
<style scoped>
.video-container {
  width: 100%;
  height: 550px;
}
.video-container video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 996px) {
  .video-container {
    height: 450px;
  }
}
@media (max-width: 720px) {
  .video-container {
    height: 400px;
  }
}
</style>
