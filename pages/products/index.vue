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
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
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