import { defineStore } from "pinia";
import { getNation } from "../services";
export const useNationStore = defineStore("nation", {
  state: () => ({
    nation: [],
  }),
  getters: {
    fetchGenge(state) {
      return state.nation;
    },
  },
  actions: {
    async getValueNation() {
      const nation = await getNation();
      return nation;
    },
  },
});