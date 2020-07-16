<template>
    <button
        :class="this.btnClass"
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
    },
    methods: {
      onClick(e) {
        this.$emit('onClick', e);
      }
    }
  };
</script>

<style scoped>

</style>
