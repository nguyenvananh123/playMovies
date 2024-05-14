<template>
  <div class="w-full m-3" v-if="movieValues">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Name Movie</label
        >
        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
          v-model="movieValues.title"
        />
      </div>
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Performer</label
        >
        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe"
          required
          v-model="movieValues.performer"
        />
      </div>

      <div>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Genge Name</label
        >
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>{{ movieValues.genge_name }}</option>
          <option v-for="genge in valueGenge" :value="`${genge.name}`">
            {{ genge.name }}
          </option>
        </select>
      </div>
      <div>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Movie Type</label
        >
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>{{ movieValues.movie_type }}</option>
          <option value="Phim Lẻ">Phim Lẻ</option>
          <option value="Phim bộ">Phim Bộ</option>
        </select>
      </div>

      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Image
        </label>
        <input
          type="file"
          ref="inputRef"
          @change="onFileChanged($event)"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Views</label
          >
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
            v-model="movieValues.views"
          />
        </div>
      </div>
      <div class="mb-6">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Date Movie</label
        >
        <input
          v-model="movieValues.Year"
          type="date"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <button
          @click="addInputField()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3"
        >
          <i class="bx bxs-message-add"></i>
        </button>
        <div v-for="(input, index) in inputs" :key="index" class="flex my-4">
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tên Tập Phim"
            v-model="input.name"
          />

          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-3"
            placeholder="Link Phim"
            v-model="input.link"
          />

          <button
            @click="removeInputField(index)"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3"
          >
            <i class="bx bxs-message-alt-x"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Content Movie</label
      >
      <textarea
        class="border-solid border-black border-[1px] w-full rounded-lg h-32 outline-none p-3"
        v-model="movieValues.content"
      ></textarea>
    </div>
    <button
      @click="submit(movieValues.id)"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useGenGeStore } from "../../store/Genge";
import { useMoviesStore } from "../../store/movies";
import { useEpisodeStore } from "../../store/episode";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const episode = useEpisodeStore();
const GenGeStore = useGenGeStore();
const moviesStore = useMoviesStore();
const valueGenge = ref();
const getDateEpisode = ref();

const inputRef = ref();
const valueImage = ref();

const onFileChanged = () => {
  const file = inputRef.value.files[0];
  if (!file) {
    return inputRef.value.click();
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    const data = reader.result.split(",")[1];
    const postData = {
      name: file.name,
      type: file.type,
      data: data,
    };
    postFile(postData);
  });
  async function postFile(postData) {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyyK5xFFaopxut0h1xKdcJV9o-KxvGXmhc6qaAWk7Ms9-ZPtS0D9s22dMIFa9rR-VXx/exec",
        {
          method: "POST",
          body: JSON.stringify(postData),
        }
      );
      const data = await response.json();

      valueImage.value = data.link;
    } catch (error) {
      alert("Vui lòng thử lại");
    }
  }
};

const movieValues = ref();
const episodeValue = ref();
const dataAfterUpdate = ref();

const inputs = ref([]);

const addInputField = () => {
  inputs.value.push({ name: "", link: "" });
};

const removeInputField = (index) => {
  inputs.value.splice(index, 1);
};

const submit = async (id) => {
  const dataMovie = {
    title: movieValues.value.title,
    movie_IDimage: valueImage.value,
    performer: movieValues.value.performer,
    Year: movieValues.value.Year,
    genge_name: movieValues.value.genge_name,
    movie_type: movieValues.value.movie_type,
    content: movieValues.value.content,
    views: movieValues.value.views,
  };
  dataAfterUpdate.value = await moviesStore.updateMovie(id, dataMovie);
  await moviesStore.fetchMovies();

  const inputValues = inputs.value.map((input) => ({
    name: input.name,
    link: input.link,
  }));
  getDateEpisode.value = episodeValue.value.find((item) => item);
  const data = {
    id: getDateEpisode.value.id,
    movie_ID: route.params.id,
    episode: inputValues,
  };
  const res = await episode.uploadEpisode(getDateEpisode.value.id, data);
  if (!res) {
    alert("coi lai code ");
  }
  router.push("/admin");
};
onMounted(async () => {
  const idMovie = route.params.id;
  movieValues.value = await moviesStore.fetchMovieDetail(idMovie);
  valueGenge.value = await GenGeStore.getGenge();
  episodeValue.value = await episode.getEpisode(idMovie);

  getDateEpisode.value = episodeValue.value.find((item) => item);
  for (let i = 0; i < getDateEpisode.value.episode.length; i++) {
    inputs.value.push({
      name: getDateEpisode.value.episode[i].name,
      link: getDateEpisode.value.episode[i].link,
    });
  }
});
</script>
