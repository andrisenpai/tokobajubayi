<template>
    <div class="catalog">
        <div class="divider">
        </div>
        <div class="catalog-product container">
            <div class="category my-4 mx-2">
                <ul class="nav nav-tabs justify-content-center sticky-top bg-white pt-2" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">Backpack</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Tas Gunung</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">Tas Waist</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row d-flex">
                            <div class="col-md-4 mt-3 mb-3 d-flex" v-for="(item, index) in backpackData" :key="item.id"
                                v-if="index < showProduct">
                                <div class="card">
                                    <nuxt-img :src="item.image_link_1" class="card-img-top" :alt="item.title"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{{ item.title }}</h5>
                                        <p class="card-text">{{ 'Rp ' +
                                            item.sale_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }} /
                                            <small class="strike">{{ 'Rp ' +
                                                item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
                                                    "$1\.") }}</small></p>
                                        <p>{{ item.description }}</p>
                                    </div>
                                </div>
                                <div class="group-button d-block">
                                    <nuxt-link :to="'/products?title=' + item.title.replaceAll(' ', '-')"
                                        class="btn btn-custom m-2">Detail</nuxt-link>
                                    <a :href="'https://api.whatsapp.com/send?phone=6281320453725' + '&text=Hallo Adiba Store ! Saya ingin membeli produk ' + item.title + '. Boleh minta informasi selengkapnya?'"
                                        class="btn btn-success m-2" target="_blank">Pesan</a>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button class="btn-custom btn d-block mx-auto" @click="loadmore()">Load More</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
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
    async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
        await store.dispatch('backpack/getBackpack')
    },
    methods: {
        loadmore() {
            let loadmore = this.showProduct + 3
            return this.showProduct = loadmore
        }
    },
}
</script>

<style scoped>
.nav-item>a.nav-link {
    /* font-size: 14px !important; */
}
.nav-link.active{
    border-bottom: 2px solid pink;
}
</style>