<template>
    <div class="md:flex items-start  py-12 2xl:px-20 md:px-6 px-4" v-if="movie">
        <h1
        class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"
      >
        {{ movie.title}}
      </h1>
    </div>
    <div>
 
      <iframe class="w-full h-screen" :src="`${episodeLinks ? episodeLinks.link:'' }`" frameborder="0">

      </iframe>
    </div>

    <div class="md:flex py-12 2xl:px-20 md:px-6 px-4">
      <div class="md:flex items-center flex-row" v-for="episode in episodes" :key="episode">
        <button class="bg-transparent m-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="playMovie(episode.id)">{{episode.name}}</button>
    </div>
    </div>
    

  </template>
  
  <script setup>
  import { useMoviesStore } from "../../store/movies";
  import { useRoute  } from "vue-router";
  import { ref, onMounted , onBeforeMount } from "vue";
  import {useEpisodeStore} from "../../store/episode"
  import {useEpisodeLinksStore} from "../../store/epsiodeLink"
  
  const route = useRoute();
  const movie = ref();
  const episodes = ref()
  const episodeLinks = ref()
  
  const movieDetail = useMoviesStore();
  const listEpisode = useEpisodeStore();
  const episodeLink = useEpisodeLinksStore()
  
  
  const playMovie = async(id)=>{
    episodeLinks.value = await episodeLink.getEpisode(id)
  }

  
  onMounted(async () => {
    const movieId = route.params.id;
    movie.value = await movieDetail.fetchMovieDetail(movieId);

    episodes.value = await listEpisode.getEpisode(movieId)
   

  });

  onBeforeMount(async()=>{
    const movieId = route.params.id;
    episodeLinks.value = await episodeLink.getEpisode(movieId)
    console.log(episodeLinks.value.link);
  })
  </script>