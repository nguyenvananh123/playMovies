<template>
  <div class="flex">
    <headerComponentsAdmin />
    <slot />
  </div>
</template>
<script setup>
import headerComponentsAdmin from "./headerComponentsAdmin.vue";
import { useRouter } from "vue-router";
const router = useRouter();
let userInfo = localStorage.getItem("users-info");
if (!userInfo) {
  router.push("/loginPage");
} else {
  router.push("/admin");
}
</script>
