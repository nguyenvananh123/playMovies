import { defineStore } from "pinia";
import {
  getMovies,
  getMovieDetail,
  CreateMovie,
  deleteMovie,
  updateMovie,
  getMovieByGenge,
  uploadMovieView
} from "../services";
export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
  }),
  getters: {
    getMovies(state) {
      return state.movies;
    },
  },
  actions: {
    async fetchMovies(_limit = 10, _sort = "id") {
      const movies = await getMovies(_limit, _sort);

      this.$patch((state) => {
        state.movies = movies;
      });
    },
    async getMovieByGengeName(genge_name) {
      const movies = await getMovieByGenge(genge_name);
      return movies;
    },
    async fetchMovieDetail(id) {
      const movie = await getMovieDetail(id);
      return movie;
    },
    async CreateMovie(movieData) {
      const movie = await CreateMovie(movieData);
      return movie;
    },
    async deleteMovie(id) {
      const movie = await deleteMovie(id);
      return movie;
    },
    async updateMovie(id, movieData) {
      const movie = await updateMovie(id, movieData);
      return movie;
    },
    async updateMovieView(id , movieData){
      const viewUpdate = await uploadMovieView(id, movieData);
      return viewUpdate
    }
    
  },
});
