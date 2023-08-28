<template>
    <div class="catalog">
        <div class="divider">
        </div>
        <div class="catalog-product container">
            <div class="category my-4 mx-2">
                <ul class="nav nav-tabs justify-content-center sticky-top bg-white pt-2 shadow" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="backpack-tab" data-bs-toggle="tab" data-bs-target="#backpack"
                            type="button" role="tab" aria-controls="backpack" aria-selected="true">Backpack</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tasanak-tab" data-bs-toggle="tab" data-bs-target="#tasanak"
                            type="button" role="tab" aria-controls="tasanak" aria-selected="false">Tas Anak</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">Tas Waist</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="backpack" role="tabpanel" aria-labelledby="backpack-tab">
                        <Backpack />
                    </div>
                    <div class="tab-pane fade" id="tasanak" role="tabpanel" aria-labelledby="tasanak-tab">
                        <Tasanak />
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <Taswaist />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import Backpack from '../../components/products/Backpack.vue';
import Tasanak from '../../components/products/Tasanak.vue';
import Taswaist from '../../components/products/Taswaist.vue';

export default {
    layout: 'layoutWithSidebar',
    data() {
        return {
            showProduct: 6
        }
    },
    components: {
        Backpack, Tasanak,
        Taswaist
    },
    methods: {

        getBackpack(){
            this.$store.dispatch('backpack/getBackpack')
        },
        getTasanak(){
            this.$store.dispatch('tasanak/getTasanak')

        },
        getTaswaist(){
            this.$store.dispatch('taswaist/getTaswaist')

        }
    },
}
</script>

<style scoped>
.nav-item>a.nav-link {
    /* font-size: 14px !important; */

}

.nav-item .nav-link::before {
    content: '◎';
    padding: 0 5px 0 0px
}

.nav-link.active {
    border-bottom: 2px solid pink;
}

.nav-tabs .nav-link {
    border: 0;

}

.nav-tabs {
    border: 0;
    border-bottom: 2px solid pink;
}</style>