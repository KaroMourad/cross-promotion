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
        width: 100%;
        height: 100%;
        background: var(--main-bg-color);
        overflow: hidden;
    }
</style>
