<template>
  <input
    v-model="searchModel"
    @keyup.enter="onSearch()"
    type="text"
    class="mr-2 w-3/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-white text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 font-semibold outline-none bg-slate-700"
  />
</template>
<script setup>
import { defineModel } from "vue";
const searchModel = defineModel("searchModel");
const emits = defineEmits(["onSearchEmit"]);

const onSearch = () => {
  emits("onSearchEmit", searchModel.value);
};
</script>
