<template>
  <div class="">
    <div>
      <button
      @click="router.push('/admin/create')"      
        class="bg-transparent m-3 right-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Create Movie
      </button>
    </div>


    <dashboardComponent

      :movies="movies"
      @deleteMovieEmit="handleDeleteMovie"
    />


  </div>
</template>
<script setup>
import { ElMessage, ElMessageBox } from "element-plus";
import dashboardComponent from "../../components/adminComponents/dashboardComponents.vue";
import { computed, onMounted } from "vue";
import { useMoviesStore } from "../../store/movies";
import { useRouter } from "vue-router";

const router = useRouter()

const ListMovieStores = useMoviesStore();
let movies = computed({
  get() {
    return ListMovieStores.getMovies;
  },
  set(NewValue) {},
});



const handleDeleteMovie = async (movieId) => {
  ElMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
    }
  )
    .then(async () => {
      ElMessage({
        type: "success",
        message: "Delete completed",
      });
      const id = movieId.id;
      await ListMovieStores.deleteMovie(id);

      movies.value = await ListMovieStores.fetchMovies();
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled",
      });
    });
};

onMounted(async () => {
  movies.value = await ListMovieStores.fetchMovies();
});
</script>
