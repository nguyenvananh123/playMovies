<template>
  <div class="md:flex items-start py-12 2xl:px-20 md:px-6 px-4" v-if="movie">
    <h1
      class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"
    >
      {{ movie.title }}
    </h1>
  </div>
  <div  class="w-[90%] h-[700px] m-auto bg-black" >
    <div v-if="getLink">
      <iframe :src="`${getLink}`" class="w-[90%] h-[700px] m-auto" frameborder="0"></iframe>
    </div>
  </div>

  <div class="md:flex py-12 2xl:px-20 md:px-6 px-4">
    <div
      class="md:flex items-center flex-row"
      v-for="episode in getIntroMovie"
      :key="episode"
    >
      <button
        class="bg-transparent m-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="playMovie(episode.name)"
      >
        {{ episode.name }}
      </button>
    </div>
  </div>
  <div>
   
    <h3 class="m-3 text-4xl font-extrabold dark:text-white">
      Phim Cùng Thể Loại
    </h3>
    <div class="group bg-white px-2 py-1 rounded-md flex justify-start">
      <div class="m-3" v-for="m in movies" :key="m.id" @click="toDetail(m.id)">
        <img
          :src="`${m.image}`"
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          class="object-cover object-center rounded-md hover:translate-y-1 w-[300px] border-solid border-gray-600 border-[1px] p-3 hover:cursor-pointer hover:transition hover:duration-300 hover:delay-150 hover:md:delay-300"
        />
        <h3 class="mt-4 text-2xl font-bold text-gray-700 px-3">
          {{ m.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMoviesStore } from "../../store/movies";
import { useRoute , useRouter } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
import { useEpisodeStore } from "../../store/episode";

const route = useRoute();
const movie = ref();
const episodes = ref();
const movies = ref();
const getIntroMovie = ref();
const getLink = ref()
const router = useRouter();

const movieDetail = useMoviesStore();
const listEpisode = useEpisodeStore();

const playMovie = async (name) => {
    for(let i = 0;i<getIntroMovie.value.length ; i++){
      if(getIntroMovie.value[i].name == name){
        getLink.value = getIntroMovie.value[i].link
      }
    }
    console.log(getLink.value);
};

const toDetail = (id)=>{
  router.push({name:'MovieDetail' , params:{ id: id }})
}

onMounted(async () => {
  const movieId = route.params.id;
  episodes.value = await listEpisode.getEpisode(movieId);
  const episode = episodes.value.find((item) => item.episode);
  getIntroMovie.value =episode.episode;
});

watchEffect(async () => {
  const movieId = route.params.id;
  movie.value = await movieDetail.fetchMovieDetail(movieId);
  const MovieByGengeName = movie.value.genge_name;
  movies.value = await movieDetail.getMovieByGengeName(MovieByGengeName);
  movies.value.shift();
});
</script>
