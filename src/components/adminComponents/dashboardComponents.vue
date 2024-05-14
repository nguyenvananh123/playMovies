<template>
  <div class="w-[86vw] overflow-x-auto shadow-md sm:rounded-lg relative">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Movies name</th>
          <th scope="col" class="px-6 py-3">Image</th>
          <th scope="col" class="px-6 py-3">genge_name</th>
          <th scope="col" class="px-6 py-3">Year</th>
          <th scope="col" class="px-6 py-3">Views</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="movie in movies"
          :key="movie.id"
          class="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ movie.title }}
          </th>
          <td class="px-6 py-4">
            <img class="w-[50px]" :src="`${movie.image}`" alt="khong phai la anh" />
          </td>
          <td class="px-6 py-4">{{ movie.genge_name }}</td>
          <td class="px-6 py-4">{{ movie.Year }}</td>
          <td class="px-6 py-4">{{ movie.views }}</td>
          <td class="px-6 py-4">
            <button
              @click="updateMovie(movie.id)"
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Edit
            </button>

            <button
              @click="deleteMovie(movie.id)"
              class="bg-red-500 ml-3 text-white hover:bg-red-600 hover:text-gray-500 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <i class="bx bx-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineEmits } from "vue";

const router = useRouter();

const updateMovie = (id) => {
  router.push({ name: "uploadMovie", params: { id: id } });
};

const emits = defineEmits(["deleteMovieEmit"]);

const deleteMovie = (id) => {
  emits("deleteMovieEmit", { id: id });
};

const props = defineProps({
  movies: {
    type: Object,
    required: true,
  },
});
</script>
