<template>
  <nav class="bg-gray-800 h-[80px]">
    <div class="flex items-center justify-between">
      <div class="logo">
        <img
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
      <div class="mr-9 mt-3 max-w-60">
        <input type="text" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white text-sm ring-1 ring-inset
        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 font-semibold outline-none bg-slate-700">
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
