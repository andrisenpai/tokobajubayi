<template>
    <div class="row d-flex">
        <div class="col-md-4 mt-3 mb-3 d-flex" v-for="(item, index) in backpackData" :key="item.id"
            v-if="index < showProduct">
            <div class="card">
                <div class="card-num">{{index+1}}</div>
                <img :src="item.image_link_1" class="card-img-top" :alt="item.title" />
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ 'Rp ' +
                        item.sale_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }} /
                        <small class="strike">{{ 'Rp ' +
                            item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
                                "$1\.") }}</small>
                    </p>
                    <p>{{ item.description.substring(0, 50) }} . . . </p>
                </div>
            </div>
            <div class="group-button d-block my-auto">
                <nuxt-link :to="'/products/' + item.category + '/' + item.title.replaceAll(' ', '-') + '?' + item.id"
                    class="btn btn-custom m-2">Detail</nuxt-link>
                <a :href="'https://api.whatsapp.com/send?phone=6281320453725' + '&text=Hallo Adiba Store ! Saya ingin membeli produk ' + item.title + '. Boleh minta informasi selengkapnya? /n /n ' + '/products/' + item.category + '/' + item.title.replaceAll(' ', '-')"
                    class="btn btn-success m-2" target="_blank">Pesan</a>
            </div>
        </div>
        <div class="col-md-12">
            <button class="btn-custom btn d-block mx-auto" @click="loadmore()">Load More</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backpackData: this.$store.getters['tasanak/tasanak'],
            showProduct: 6
        }
    },
    async fetch(){
        await this.$store.dispatch('tasanak/getTasanak')
    },
    methods: {
        loadmore() {
            let loadmore = this.showProduct + 3
            return this.showProduct = loadmore
        },
        async getBackpack(){
            await this.$store.dispatch('tasanak/getTasanak')
        },
    },
}
</script>