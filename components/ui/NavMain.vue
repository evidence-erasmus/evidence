<template>
    <nav>
        <NuxtLink to="/about" class="px-2 py-1">About</NuxtLink>
        <NuxtLink to="/modules" class="px-2 py-1">Modules</NuxtLink>
        
    </nav>
</template>

<style scoped>
/* home route and active route will show in bold as it matches / and /about */
    a.router-link-active {
        /* font-weight: bold; */
        font-weight: 700;
        border-bottom:1px solid black !important;
    }
/* exact link will show the primary color for only the exact matching link */
    /* a.router-link-exact-active {
        color: #00c58e;
    } */
</style>