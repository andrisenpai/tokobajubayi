<template>
    <div class="catalog">
        <div class="divider">
        </div>

        <div class="kategory">

        </div>

        <div class="catalog-product container">
            <div class="row">
                <div class="col-md-4    mt-3 mb-3" v-for="(item,index) in backpackData" :key="item.id" v-if="index < showProduct">
                    <div class="card">
                        <img :src="item.image_link" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{'Rp '  + item.sale_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }} / <small class="strike">{{'Rp ' + item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")}}</small></p>
                            <p>{{ item.description }}</p>
                            
                            <a :href="'https://api.whatsapp.com/send?phone=6281320453725'+'&text=Hallo Adiba Store ! Saya ingin membeli produk '+item.title+'. Boleh minta informasi selengkapnya?'" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <button class="btn-custom btn d-block mx-auto" @click="loadmore()">Load More</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'layoutWithSidebar',
    data() {
        return {
            backpackData: this.$store.getters['backpack/backpack'],
            showProduct: 6
        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        await store.dispatch('backpack/getBackpack')  
    },
    methods: {
        loadmore(){
            let loadmore = this.showProduct + 3
            return this.showProduct = loadmore
        }
    },
}
</script>