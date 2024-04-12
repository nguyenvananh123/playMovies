<template>
  <div class="bg-gray-200">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h3 class="text-gray-800 font-bold text-2xl py-2">Play List Movies</h3>
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
          <homeComponent :movies="movies" />
        
      </div>
    </div>
  </div>
</template>

<script setup>


import homeComponent from "../../components/container/HomeComponent.vue"
import { computed ,onMounted } from "vue";
import {useMoviesStore } from "../../store/movies"

const ListMovieStores = useMoviesStore()

let movies = computed({
  get(){
   return ListMovieStores.getMovies
  },
  set(NewValue){}
})

onMounted(async () => {
  movies.value = await ListMovieStores.fetchMovies();

});
</script>
