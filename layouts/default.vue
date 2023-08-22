<template>
    <div>
        <Header :position="position"/>
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            position: "fixed-top"
        }
    },
}
</script>