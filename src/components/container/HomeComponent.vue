<template>
  <div

    class="group cursor-pointer bg-white px-2 py-1 rounded-md"
    v-for="movie in movies"
    :key="movie.id"
  >
    <div @click="movieDetails(movie.id)"
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
    >
      <img
        :src="movie.image"
        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-your px-2 text-gray-700">{{ movie.title }}</h3>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter()

const movieDetails = (id)=>{
   router.push({name:'MovieDetail' , params:{ id: id }})
}


const props = defineProps({
  movies: {
    type: Object,
    required: true,
  },
});
</script>
