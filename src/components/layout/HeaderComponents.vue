<template>
  <nav class="bg-gray-800 h-[80px]">
    <div class="flex items-center justify-between w-full">
      <div class="logo">
        <img
          class="ml-5 mt-1"
          src="https://chieuphimquocgia.com.vn/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75"
          alt=""
        />
      </div>
      <div class="mt-[12px]">
        <div class="flex space-x-4 leading-none text-16">
          <div
            @click="router.push('/')"
            class="text-gray-300 hover:text-red-500 rounded-md px-3 py-2 text-l font-medium cursor-pointer"
          >
            Trang Chủ
          </div>
          <div
            @click="router.push('/Danh-Sach-Phim')"
            class="text-gray-300 hover:text-red-500 rounded-md px-3 py-2 text-l font-medium cursor-pointer"
          >
            Danh Sách Phim
          </div>
          <div
            @click="router.push('/Phim-Le')"
            class="text-gray-300 hover:text-red-500 rounded-md px-3 py-2 text-l font-medium cursor-pointer"
          >
            Phim Lẻ
          </div>
          <div
            @click="router.push('/Phim-Bo')"
            class="text-gray-300 hover:text-red-500 rounded-md px-3 py-2 text-l font-medium cursor-pointer"
          >
            Phim Bộ
          </div>
          <div
            @click="router.push('/Phim-Moi')"
            class="text-gray-300 hover:text-red-500 rounded-md px-3 py-2 text-l font-medium cursor-pointer"
          >
            Phim Mới
          </div>
        </div>
      </div>
      <div class="mr-2 mt-3 w-[45rem] flex justify-between text-white">
        <searchComponent @onSearchEmit="onSearch" v-model:searchModel="searchModel"/>
        <div class="flex ">

          <div @click="router.push('/signPage')" class="cursor-pointer p-1 hover:text-red-500 ">Đăng Ký</div>
          <div @click="router.push('/loginPage')" class="cursor-pointer p-1  hover:text-red-500">Đăng Nhập</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
import searchComponent from "../container/searchComponent.vue";
const searchModel = ref()

const onSearch = (searchValue) => {
  router.push(`/request/${searchValue}`)
  searchModel.value =""
};
</script>
