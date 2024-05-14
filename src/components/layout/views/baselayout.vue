<template>
    <headerComponents />
    <slot/>

    <footerComponents />

</template>
<script setup>
import headerComponents from "./HeaderComponents.vue";
import footerComponents from "./footerComponents.vue"
</script>