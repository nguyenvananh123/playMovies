import { defineStore } from "pinia";
import { getMovies ,getMovieDetail } from "../services";
export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
  }),
  getters: {
    getMovies(state) {
      return state.movies;
    }

  },
  actions: {
    async fetchMovies(_limit = 10, _sort = "id") {
      const movies = await getMovies(_limit, _sort);
      this.$patch((state)=>{
          state.movies = movies
      })
    },
    async fetchMovieDetail(id){
      const movie = await getMovieDetail(id)
      return movie
    },

 
  },
});
