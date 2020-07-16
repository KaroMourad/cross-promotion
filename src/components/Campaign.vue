<template>
    <div class="campaign">
        <img :src="data.image"/>
    </div>
</template>

<script>
  export default {
    name: 'Campaign',
    props: {
      data: {}
    }
  };
</script>

<style>
    .campaign {
        display: inline-block;
        width: 320px;
        height: 543px;
        background: #FFFFFF;
        box-shadow: 0px 0px 35px rgba(154, 161, 171, 0.15);
        border-radius: 10px;
        padding: 15px;
        margin: 20px 40px 20px 0;
    }
</style>
