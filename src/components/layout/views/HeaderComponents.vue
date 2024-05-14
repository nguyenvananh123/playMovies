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
          <div class="relative inline-block text-left">
            <div
              class="inline-flex w-full gap-x-1.5 rounded-md px-3 py-2 text-l font-medium text-gray-300 hover:text-red-500 cursor-pointer subnav"
            >
              Thể loại

              <div
                class="absolute left-2 top-[75%] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none subnav_child hidden"
              >
                <div class="py-1">
                  <div
                    class="text-gray-700 block px-4 py-2 text-sm"
                    v-for="item in getGenge"
                    :key="item.id"
                    @click="afterSearch(item.name)"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative inline-block text-left">
            <div
              class="inline-flex w-full gap-x-1.5 rounded-md px-3 py-2 text-l font-medium text-gray-300 hover:text-red-500 cursor-pointer subnav"
            >
              Quốc Gia

              <div
                class="absolute left-2 top-[75%] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none subnav_child hidden"
              >
                <div class="py-1">
                  <div
                    class="text-gray-700 block px-4 py-2 text-sm"
                    v-for="item in nation"
                    :key="item.id"
                    @click="afterSearchNation(item.nation)"
                  >
                    {{ item.nation }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mr-2 mt-3 w-[45rem] flex justify-between text-white">
        <searchComponent
          @onSearchEmit="onSearch"
          v-model:searchModel="searchModel"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useGenGeStore } from "../../../store/Genge";
import { ref, onMounted } from "vue";
import searchComponent from "../../container/searchComponent.vue";
import {useNationStore} from "../../../store/nation"

const router = useRouter();

const searchModel = ref();
const gengeStore = useGenGeStore();
const nationStore = useNationStore()

const getGenge = ref();
const nation = ref()

const onSearch = (searchValue) => {
  router.push(`/request/${searchValue}`);
  searchModel.value = "";
};

const afterSearch = (name) => {
  router.push({ name: "afterSelectMovie", params: { name: name } });
};

const afterSearchNation = (nation)=>{
  console.log(nation);
}

onMounted(async () => {
  getGenge.value = await gengeStore.getGenge();
  nation.value = await nationStore.getValueNation()
});
</script>
