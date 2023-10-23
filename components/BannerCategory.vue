<template>
  <div>
      <div class="banner">
          <div class="banner-img" :style='"background-image: url("+require(`~/assets/banner/${imageBanner}.jpg`)+")"'/>
      </div>
  </div>
</template>
<script>
export default {
  props: ['imageBanner']
}
</script>
<style lang="scss" scoped>
  .banner{
      .banner-img{
          width: 100%;
          height: 400px;
          background-size: cover;
          background-position: 20%;
      }
  }


</style>
