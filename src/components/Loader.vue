<template>
    <div class="loader self-center"/>
</template>

<style scoped>
    .loader {
        border-top: 4px solid blue;
        border-right: 4px solid green;
        border-bottom: 4px solid red;
        border-left: 4px solid pink;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
