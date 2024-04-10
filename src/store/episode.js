import { defineStore } from "pinia";
import { getEpisodeForMovieID } from "../services";
export const useEpisodeStore = defineStore("episode", {
  state: () => ({
    episode: [],
  }),
  getters: {
    getEpisodeForMovieID(state) {
      return state.episode;
    }

  },
  actions: {
    async getEpisode(movie_ID) {
      const movies = await getEpisodeForMovieID(movie_ID);
      return movies
    }
  },
});
