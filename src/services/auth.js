import axios from "axios";
const apiUsers = "http://localhost:3000/users";

const getUsers = async () => {
  try {
    const res = await axios.get(apiUsers);
    if (res && res.data) return res.data;
  } catch (e) {
    console.log("Error getting users", e);
  }
};

const sign = async (signData) => {
  try {
    const res = await axios.post(apiUsers, signData);
    if (res && res.data) {
      console.log(res);
      return res;
    }
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};

const login = async (user, password) => {
  try {
    const res = await axios.get(
      `${apiUsers}?user=${user}&password=${password}`
    );
    if (res && res.data) {
      return res;
    }
  } catch (e) {
    console.log("error login:", e);
  }
};

export { sign, getUsers, login };
