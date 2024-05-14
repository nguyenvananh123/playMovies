import { defineStore } from "pinia";
import { getUsers, sign, login } from "../services/auth";
export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  actions: {
    async fetchUsers() {
      const user = await getUsers();
      return user;
    },
    async signUsers(signData) {
      const user = await sign(signData);
      return user;
    },
    async loginUser(user, password) {
      const userName = await login(user, password);
      return userName;
    },
  },
});
