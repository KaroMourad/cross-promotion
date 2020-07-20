<template>
    <div class="main-layout">
        <router-view/>
    </div>
</template>

<script>
    import isEmpty from "lodash"

    export default {
        name: 'main-layout',
        async mounted()
        {
            if (this.$store?.getters?.info && isEmpty(this.$store.getters.info))
            {
                await this.$store.dispatch('getUserInfo');
            }
        }
    }
</script>

<style scoped>
    .main-layout {
        width: 100vw;
        height: 100vh;
        background: var(--main-bg-color);
    }
</style>
