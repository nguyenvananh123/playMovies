<template>
    <div class="bg-gray-900">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h3 class="text-white text-2xl py-2">Play List Movies</h3> 
          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" >
            <ListMovieComponent />
          </div>
        </div>
      </div>
    
</template>

<script setup>
import ListMovieComponent from '../../components/container/ListMovieComponent.vue';
const filterListGenge = async()=>{
  
}
</script>
