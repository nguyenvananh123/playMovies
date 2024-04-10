import { defineStore } from "pinia";
import { getEpisodeLink } from "../services";
export const useEpisodeLinksStore = defineStore("episodeLinks", {
  state: () => ({
    episodeLinks: [],
  }),
  getters: {
    getEpisodeLink(state) {
      return state.episodeLinks;
    }

  },
  actions: {
    async getEpisode(episode_id) {
      const movies = await getEpisodeLink(episode_id);
      return movies
    }
  },
});
