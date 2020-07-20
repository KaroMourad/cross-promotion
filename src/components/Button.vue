<template>
    <button
        :class="`${this.btnClass} ${this.btnType === 'href' ? 'hrefButton' : 'button'} ${!!this.btnDisable  ? 'disabled' : '' }`"
        :disabled="this.btnDisable"
        :style="this.btnStyles"
        :type="this.btnType"
        @click="onClick"
    >
        <slot/>
    </button>
</template>

<script>
    export default {
        props: {
            btnStyles: {},
            btnClass: String,
            btnType: String,
            btnDisable: Boolean,
            href: {
                type: String,
                default: null
            }
        },
        methods: {
            onClick(e)
            {
                this.$emit('onClick', e);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .hrefButton {
        text-decoration: none;
        border: none;
        margin: 10px 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: none;
        color: white;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.056px;
        height: 48px;
        outline: none;
    }

    html {
        .hrefButton:active {
            color: var(--main-active-color);
        }
    }

    .button {
        border: none;
        margin: 10px 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--main-color);
        border-radius: 5px;
        color: white;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.056px;
        height: 48px;
    }

    .button:hover, .hrefButton:hover {
        opacity: 0.8;
    }

    .disabled {
        -webkit-appearance: none;
        opacity: 0.8;
    }
</style>
