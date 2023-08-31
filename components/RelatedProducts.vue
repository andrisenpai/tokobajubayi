<template>
  <div class="related-products">
    <div class="content">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12" v-for="(item, index) in relatedProduct" v-if="index < 6">
          <div class="row">
            <div class="col-12">
              <div class="my-3 p-3 bg-body rounded shadow-sm">
                <div class="d-flex text-muted pt-3">
                  <img class="bd-placeholder-img flex-shrink-0 me-2 rounded" style="width: 100px;" :src="item.image_link_1"/>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-inline-block text-gray-dark w-100">{{ item.title }}</strong>
                    {{ item.description.substring(0,60) }} ... <br/>
                    {{ 'Rp ' +
                        item.sale_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }} /
                        <small class="strike">{{ 'Rp ' +
                            item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
                                "$1\.") }}</small> <br/><br />
                    <nuxt-link :to="'/products/' + item.category + '/' + item.title.replaceAll(' ', '-') + '?' + item.id" class="my-3">Detail</nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    relatedProduct() {
      return this.$store.getters['backpack/relatedProduct']
    }
  }
}
</script>
