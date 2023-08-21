<template>
    <div class="catalog">
        <div class="divider">
        </div>

        <div class="kategory">

        </div>

        <div class="catalog-product container">
            <div class="row">
                <div class="col-md-4 mt-3 mb-3" v-for="item in backpackData" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image_link" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{'Rp '  + item.sale_price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }} / <small class="strike">{{'Rp ' + item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")}}</small></p>
                            <p>{{ item.description }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
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
            backpackData: this.$store.getters['backpack/backpack']
        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        await store.dispatch('backpack/getBackpack')  
    },
}
</script>