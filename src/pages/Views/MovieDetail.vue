<template>
  <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4" v-if="movie">
    <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
      <img
        class="w-full h-full"
        alt="image of a girl posing"
        :src="`${movie.image}`"
      />
    </div>

    <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
      <div class="border-b border-gray-200 pb-6">
        <h1
          class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"
        >
          {{ movie.title}}
        </h1>
      </div>

      <div>
        <p
          class="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7"
        >
          <strong>Diễn Viên :</strong>{{ movie.performer.join(' , ')}}
        </p>
        <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
          <strong>Thể Loại :</strong> {{ movie.Genre.join(' , ')}}
        </p>
        <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
          <strong>Nội Dung :</strong> {{ movie.Content }}
        </p>
        <p
          class="text-base mb-4 leading-4 mt-4 text-gray-600 dark:text-gray-300"
        >
          <strong>Views :</strong> {{ movie.views }}
        </p>
      </div>
      <button
        @click="playMovie(movie.id)"
        class="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none"
      >
        Xem Phim
      </button>
    </div>
  </div>
  <div v-else>
      <h3>Không Tìm Thấy Phim</h3>
  </div>
</template>

<script setup>
import { useMoviesStore } from "../../store/movies";
import { useRoute , useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter()
const movie = ref();

const movieDetail = useMoviesStore();



const playMovie=(id)=>{
  router.push({name:'MoviePlay' , params:{ id: id }})
}

onMounted(async () => {
  const movieId = route.params.id;
  movie.value = await movieDetail.fetchMovieDetail(movieId);
});
</script>
