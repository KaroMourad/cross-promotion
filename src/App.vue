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
    import MainLayout from './layouts/MainLayout';

    export default {
        computed: {
            layout()
            {
                return `${this.$route.meta.layout || 'empty'}-layout`;
            }
        },
        /*
        ,
        async mounted()
        {
            const user = await this.$store.dispatch('getUid');
            if (user)
            {
                this.$router.push('/campaigns');
            }
        }
        */
        components: {
            EmptyLayout,
            MainLayout
        }
    };
</script>


<style lang="scss">
    :root {
        --main-bg-color: #E5E5E5;
        --empty-bg-color: radial-gradient(205.56% 311.83% at 34.65% -3.04%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.47) 100%), radial-gradient(87.1% 348.28% at 26.22% 31.96%, #4425C1 0%, #2D32A9 100%), #4326B8;
        --main-color: #727CF5;
        --main-active-color: #e91e63;
        --main-border-color: #C7C4C4;
    }

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
            color: var(--main-color);

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .self-center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    html {
        :-webkit-any-link:active {
            color: var(--main-active-color);
        }

        .line {
            background: #D6DDE3;
            width: 100%;
            height: 1px;
            margin: 20px 0;
            display: inline-block;
        }
    }

    .error {
        position: absolute;
        background: white;
        right: 20px;
        border: 1px solid red;
        border-radius: 5px;
        top: -11px;
        font-size: 11px;
    }

    .invalid {
        color: red;
        display: block;
        text-align: left;
        padding: 4px 10px;
    }

    .invalidInput, .invalidInput:focus {
        border: 1px solid red;
        outline: none;
    }
</style>
