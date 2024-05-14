import { defineStore } from "pinia";
import {
  getEpisodeForMovieID,
  createEpisode,
  getEpisodeLink,
  uploadEpisode,
} from "../services";
export const useEpisodeStore = defineStore("episode", {
  state: () => ({
    episode: [],
  }),
  getters: {
    getEpisodeForMovieID(state) {
      return state.episode;
    },
  },
  actions: {
    async getEpisode(movie_ID) {
      const episode = await getEpisodeForMovieID(movie_ID);
      return episode;
    },
    async createEpisodeStore(movie_ID) {
      const episode = await createEpisode(movie_ID);
      return episode;
    },
    async getEpisodeLink(id) {
      const episode = await getEpisodeLink(id);
      return episode;
    },
    async uploadEpisode(id, dataForm) {
      const episode = await uploadEpisode(id, dataForm);
      return episode;
    },
  },
});
