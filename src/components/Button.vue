<template>
    <button
        :class="`${this.btnClass} ${!!this.btnDisable  ? 'disabled' : '' }`"
        :disabled="this.btnDisable"
        :style="this.btnStyles"
        :type="this.btnType"
        @click="onClick"
        class="button"
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
        },
        methods: {
            onClick(e)
            {
                this.$emit('onClick', e);
            }
        }
    };
</script>

<style scoped>
    .button:hover {
        opacity: 0.8;
    }

    .disabled {
        -webkit-appearance: none;
        opacity: 0.8;
    }
</style>
