<template>
  <div class="bg-gray-200">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h3 class="text-gray-800 font-bold text-2xl py-2">Play List Movies</h3>
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div
          class="group cursor-pointer bg-white px-2 py-1 rounded-md"
          v-for="movie in listMoviesAfterSearch"
          :key="movie.id"
        >
          <div
            @click="movieDetails(movie.id)"
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              :src="movie.image"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-your font-semibold px-2 text-gray-700">
            {{ movie.title }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from "vue";
import { useRoute,useRouter } from "vue-router";
import { useMoviesStore } from "../../store/movies";

const route = useRoute();
const router  = useRouter()
const listMoviesAfterSearch = ref();
const searchValue = ref();
const MoviesStore = useMoviesStore();

let movies = computed({
  get() {
    return MoviesStore.getMovies;
  },
  set(NewValue) {},
});

const movieDetails = (id)=>{
   router.push({name:'MovieDetail' , params:{ id: id }})
}

watchEffect(async () => {
  searchValue.value = route.params.search;
  movies.value = await MoviesStore.fetchMovies();
  listMoviesAfterSearch.value = movies.value.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.value.toLowerCase())
  );
  console.log(listMoviesAfterSearch.value);
});
</script>
