<template>
    <div id="app">
        <div id="nav">
            <component :is="layout">
                <router-view/>
            </component>
        </div>
    </div>
</template>

<script>
  import EmptyLayout from './layouts/EmptyLayout';

  export default {
    computed: {
      layout() {
        console.log(this.$route.meta);
        return `${this.$route.meta.layout || 'empty'}-layout`;
      }
    },
    components: {
      EmptyLayout
    }
  };
</script>


<style lang="scss">
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    #nav {
        width: 100%;
        height: 100%;

        a {
            text-decoration: none;
            color: #727CF5;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
