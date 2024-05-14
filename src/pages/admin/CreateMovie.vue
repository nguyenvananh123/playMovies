<template>
  <div class="w-full m-3">
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
          v-model="title"
        />
        <p class="text-red-400">{{ errors.title }}</p>
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
          v-model="performer"
        />
        <p class="text-red-400">{{ errors.performer }}</p>
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
          v-model="genge_name"
        >
          <option selected hidden>Movie Genge</option>
          <option v-for="genge in valueGenge" :value="`${genge.name}`">
            {{ genge.name }}
          </option>
        </select>
        <p class="text-red-400">{{ errors.genge_name }}</p>
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
          v-model="movie_type"
        >
          <option selected hidden>Movie Type</option>
          <option value="Phim lẻ">Phim Lẻ</option>
          <option value="Phim bộ">Phim Bộ</option>
        </select>
        <p class="text-red-400">{{ errors.movie_type }}</p>
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
          <p class="text-red-400">{{ errors.valueImage }}</p>
        </div>
      </div>
      <div class="mb-6">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Date Movie</label
        >
        <input
          type="date"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          v-model="year"
        />
        <p class="text-red-400">{{ errors.year }}</p>
      </div>
      <div>
        <button
          @click="addInputField"
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
        v-model="content"
      ></textarea>
      <p class="text-red-400">{{ errors.content }}</p>
    </div>

    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="submit()"
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
import { useRouter } from "vue-router";
const router = useRouter();

const episode = useEpisodeStore();
const GenGeStore = useGenGeStore();
const moviesStore = useMoviesStore();
const valueGenge = ref();
const dataMovieAfterCreate = ref();
const valueEpisode = ref([])

const title = ref();
const performer = ref();
const year = ref();
const genge_name = ref();
const movie_type = ref();
const content = ref();

const inputRef = ref();
const valueImage = ref();

const inputs = ref([{ name: "", link: "" }]);

const addInputField = () => {
  inputs.value.push({ name: "", link: "" });
};

const removeInputField = (index) => {
  inputs.value.splice(index, 1);
};

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
const loading = ref(true)
const errors = ref({
  title: "",
  valueImage: "",
  performer: "",
  Year: "",
  genge_name: "",
  movie_type: "",
  content: "",
});

const Isvalide = () => {
  let isCheck = true;

  if (title.value == undefined) {
    errors.value.title = "Vui Lòng Nhập Tên";
    isCheck = false;
  }

  if (content.value == undefined) {
    errors.value.content = "Vui Lòng Nhập Nội Dung";
    isCheck = false;
  }

  if (genge_name.value == undefined) {
    errors.value.genge_name = "Vui Lòng Nhập Thể Loại Phim";
    isCheck = false;
  }

  if (valueImage.value == undefined) {
    errors.value.valueImage = "Vui Lòng Chọn Ảnh";
    isCheck = false;
  }

  if (year.value == undefined) {
    errors.value.year = "Vui Lòng Chọn Năm";
    isCheck = false;
  }

  if (performer.value == undefined) {
    errors.value.performer = "Vui Lòng Nhập Tên Diễn Viên";
    isCheck = false;
  }

  if (movie_type.value == undefined) {
    errors.value.movie_type = "Vui Lòng Nhập Phim bộ Hoặc Phim lẻ";
    isCheck = false;
  }
  return isCheck;
};

const submit = async () => {
  if (Isvalide()) {
    const dataMovie = {
      title: title.value,
      image: valueImage.value,
      performer: performer.value,
      Year: year.value,
      genge_name: genge_name.value,
      movie_type: movie_type.value,
      content: content.value,
      views: 0,
    };
    dataMovieAfterCreate.value = await moviesStore.CreateMovie(dataMovie);
    await moviesStore.fetchMovies();
    router.push("/admin");
  }

  const inputValues = inputs.value.map((input) => ({
    name: input.name,
    link: input.link,
  }));
    const data = {
       movie_ID: dataMovieAfterCreate.value.id,
       episode: inputValues
    }
    await episode.createEpisodeStore(data);

};

onMounted(async () => {
  valueGenge.value = await GenGeStore.getGenge();
});
</script>
