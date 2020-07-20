<template>
    <div class="empty-layout">
        <router-view/>
    </div>
</template>

<style scoped>
    .empty-layout {
        width: 100vw;
        height: 100vh;
        background: var(--empty-bg-color);
    }
</style>
