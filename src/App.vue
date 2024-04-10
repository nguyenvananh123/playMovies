<template>
  <div>
    <headerComponents />
    <div>
      <router-view></router-view>
    </div>
    <footerComponents />
  </div>
</template>
<script setup>
import headerComponents from "./components/layout/HeaderComponents.vue";
import footerComponents from "./components/layout/footerComponents.vue";
</script>
