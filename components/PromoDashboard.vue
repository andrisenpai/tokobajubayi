<template>
  <div class="container my-5 featured__dashboard">
    <div class="title mb-5">
      BEST CHOICE
    </div>
    <carousel :responsiveClass="true" :responsive="responsive">
      <div v-for="item in featured" class="p-3">
        <nuxt-link :to="'/products/' + item.category + '/' + item.title.replaceAll(' ', '-') + '?' + item.id">
          <img :src="item.image_link_1" :alt="item.title">
          <div class="info text-center ">
            <strong class="featured-title bold">{{ item.title.substring(0, 30) }} ...</strong>
            <p class="text-info">Rp {{ item.sale_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }} /
              <small class="strike text-danger">{{ 'Rp ' +
                item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
                  "$1\.") }}</small>
            </p>
          </div>
        </nuxt-link>


      </div>

    </carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          nav: true,
          autoHeight: true
        },
        600: {
          items: 2,
          nav: false,
          autoHeight: true
        },
        1000: {
          items: 4,
          nav: true,
          loop: true,
          autoHeight: true
        }
      },
      featured: this.$store.getters['global/featured']

    }
  },
  mounted() {
    this.getPromoDashboard()
  },
  methods: {
    async getPromoDashboard() {
      await this.$store.dispatch('global/getTasFeatured')
    }
  },
}
</script>
