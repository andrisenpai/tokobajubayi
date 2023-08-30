<template>
  <div class="content container">
    <div v-for="item in detailData" v-if="item.title == compare">
      <div class="row">
        <div class="col-12">
          <div class="title mb-4">{{ item.title }}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <client-only> <!-- important to add client-only-->

              <carousel :responsiveClass="true" :responsive="responsive">
                <img v-for="image in dataSlide" :src="image.image" alt="" v-if="image.image">
              </carousel>

            </client-only>
          </div>
          <div class="col-md-8">
            <strong>
              <p><span class="display-3">{{ 'Rp ' +
                item.sale_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
                  "$1\.") }}</span> / <span class="strike small text-danger">{{ 'Rp ' +
      item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
        "$1\.") }}</span></p>
            </strong>
            <strong>
              <p class="text-uppercase small">brand: {{ item.brand }}</p>
            </strong>
            <strong>
              <p class="text-uppercase small">berat: {{ item.berat }} Kg</p>
            </strong>
            <p v-html="item.description.replaceAll('\n', '<br>')"></p>
            <p class="discount">
              Discount : {{ 'Rp ' + item.discount.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
                "$1\.") }}
            </p>
            <Promo v-if="$route.params.category !== 'taswaist'" />
            <div class="group-action">
              <a :href="'https://api.whatsapp.com/send?phone=6281320453725' + '&text=Hallo Adiba Store ! Saya ingin membeli produk ' + item.title + '. Boleh minta informasi selengkapnya? /n /n ' + '/products/' + item.category + '/' + item.title.replaceAll(' ', '-')"
                class="btn btn-success" target="_blank">Pesan</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  layout: 'detailLayout',
  head() {
    return {
      title: this.compare
    }

  },
  data() {
    return {
      detailData: [],
      dataSlide: '',
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
          autoHeight: true
        },
        600: {
          items: 1,
          nav: false,
          autoHeight: true
        },
        1000: {
          items: 1,
          nav: true,
          loop: true,
          autoHeight: true
        }
      }


    }
  },
  computed: {
    compare() {
      let titleEnc = this.$route.params.detail
      let title = titleEnc.replaceAll('-', ' ')
      return title
    },

    // title(){
    //    let titleEnc = this.$route.params.detail
    //    return titleEnc
    // }
  },
  created() {
    this.slide()
    this.showData()
  },
  methods: {
    slide() {

    },
    async showData() {
      let category = this.$route.params.category;
      if (category == 'backpack') {
        await this.$store.dispatch('backpack/getBackpack')
        this.detailData = this.$store.getters['backpack/backpack']
        let slide = this.detailData
        slide.forEach(element => {
          if (element.title == this.compare) {
            this.dataSlide = [
              {
                id: 1,
                image: element.image_link_1
              },
              {
                id: 2,
                image: element.image_link_2
              },
              {
                id: 3,
                image: element.image_link_3
              },
              {
                id: 4,
                image: element.image_link_4
              },
              {
                id: 5,
                image: element.image_link_5
              },
              {
                id: 6,
                image: element.image_link_6
              },
              {
                id: 7,
                image: element.image_link_7
              },
            ]
          }
        });
      } else if (category == 'tasanak') {
        await this.$store.dispatch('tasanak/getTasanak')
        this.detailData = this.$store.getters['tasanak/tasanak']
        let slide = this.detailData
        slide.forEach(element => {
          if (element.title == this.compare) {
            this.dataSlide = [
              {
                id: 1,
                image: element.image_link_1
              },
              {
                id: 2,
                image: element.image_link_2
              },
              {
                id: 3,
                image: element.image_link_3
              },
              {
                id: 4,
                image: element.image_link_4
              },
              {
                id: 5,
                image: element.image_link_5
              },
              {
                id: 6,
                image: element.image_link_6
              },
              {
                id: 7,
                image: element.image_link_7
              },
            ]
          }
        });
      } else if (category == 'taswaist') {
        await this.$store.dispatch('taswaist/getTaswaist')
        this.detailData = this.$store.getters['taswaist/taswaist']
        let slide = this.detailData
        slide.forEach(element => {
          if (element.title == this.compare) {
            this.dataSlide = [
              {
                id: 1,
                image: element.image_link_1
              },
              {
                id: 2,
                image: element.image_link_2
              },
              {
                id: 3,
                image: element.image_link_3
              },
              {
                id: 4,
                image: element.image_link_4
              },
              {
                id: 5,
                image: element.image_link_5
              },
              {
                id: 6,
                image: element.image_link_6
              },
              {
                id: 7,
                image: element.image_link_7
              },
            ]
          }
        });
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  min-height: 200px;
}
</style>
