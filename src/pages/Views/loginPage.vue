<template>
  <div class="w-full max-w-screen-sm mx-auto my-28 p-3 h-[400px]">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Tài Khoản
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          v-model="userName"
          placeholder="Tài Khoản"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Mật Khẩu
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Mật Khẩu"
          v-model="password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          @click="login"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Đăng Nhập
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUsersStore } from "../../store/auth";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const usersStore = useUsersStore();
const router = useRouter();

const userName = ref();
const password = ref();

const login = async () => {
  const users = await usersStore.loginUser(userName.value, password.value);

  if (users.status == 200 && users.data.length > 0) {
   localStorage.setItem("users-info" ,JSON.stringify(users.data))
   
    ElMessage({
      message: "Đăng Nhập Thành Công",
      type: "success",
    });
    router.push('/admin')
  
 
  } else {
    ElMessage({
      message: "Đăng Nhập Không Thành Công",
      type: "errors",
    });
  }
};
</script>
