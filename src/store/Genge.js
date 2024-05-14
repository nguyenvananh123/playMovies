import { defineStore } from "pinia";
import { getGenge } from "../services";
export const useGenGeStore = defineStore("genge", {
  state: () => ({
    genge: [],
  }),
  getters: {
    fetchGenge(state) {
      return state.genge;
    },
  },
  actions: {
    async getGenge() {
      const genGe = await getGenge();
      return genGe;
    },
  },
});
