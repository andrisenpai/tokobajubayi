<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-custom shadow" :class="position">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="/girl.png" alt="Bootstrap" width="30" height="24"><span class="ms-1 logo-text">Adiba</span><span class="logo-text" style="color: #4682A9;text-shadow: 0px -1px #000;">Store</span> 
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" aria-current="page" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/products">Katalog</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/address">Alamat</nuxt-link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <a class="btn btn-custom" href="#daftar_reseller"><img src="~/assets/icon/crown.png" alt="" class="icon pb-1"> Daftar Member</a>
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    props:['position']
}
</script>
<style scoped>
.icon {
    height: 24px;
}

</style>