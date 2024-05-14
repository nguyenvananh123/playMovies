import axios from "axios";
const apiMovie = "http://localhost:3000/Movies";
const apiGenge = "http://localhost:3000/genge";
const apiEpisode = "http://localhost:3000/episode";
const api = "http://localhost:3000/nationality";

const getMovies = async (_limit, _sort) => {
  try {
    const res = await axios.get(apiMovie, {
      params: {
        _limit,
        _sort,
      },
    });
    if (res.data && res) {
      return res.data;
    }
  } catch (e) {
    console.log("Errors Get Movies", e);
  }
};

const getMovieByGenge = async (genge_name) => {
  try {
    const res = await axios.get(`${apiMovie}/?genge_name=${genge_name}`);
    if (res.data && res) return res.data;
  } catch (e) {
    console.log(e);
  }
};


const CreateMovie = async (movieData) => {
  try {
    const res = await axios.post(apiMovie, movieData);
    if (res.data && res) {
      return res.data;
    }
  } catch (e) {
    console.log("Errors post Movies", e);
  }
};

const updateMovie = async (movieId, updatedData) => {
  try {
    const res = await axios.put(`${apiMovie}/${movieId}`, updatedData);
    return res.data;
  } catch (error) {
    console.error("Error updating movie:", error);
    throw error;
  }
};

const uploadMovieView  = async(id , dataMovie)=>{
  try{
    const res = await axios.patch(`${apiMovie}/${id}`, dataMovie);
  }
  catch (error) {
    console.log(error , "Error uploading movie:");
  }
}

const deleteMovie = async (id) => {
  try {
    const res = await axios.delete(`${apiMovie}/${id}`);
    if (res.data && res) {
      return res.data;
    }
  } catch (e) {
    console.log("Errors delete Movies", e);
  }
};

const getGenge = async () => {
  const res = await axios.get(apiGenge);
  if (res.data && res) return res.data;
};

const getMovieDetail = async (id) => {
  try {
    const res = await axios.get(`${apiMovie}/${id}`);
    if (res && res.data) return res.data;
  } catch (error) {
    throw new Error("fetchMoviesDetail Error: " + error);
  }
};

const getEpisodeForMovieID = async (movie_ID) => {
  try {
    const res = await axios.get(`${apiEpisode}?movie_ID=${movie_ID}`);
    if (res && res.data) return res.data;
  } catch (e) {
    console.log("error getting episode", e);
  }
};

const createEpisode = async (dataEpisode) => {
  try {
    const res = await axios.post(apiEpisode, dataEpisode);
    if (res && res.data) return res.data;
  } catch (e) {
    log("error creating episode", e);
  }
};

const uploadEpisode = async (id, dataEpisode) => {
  try {
    const res = await axios.put(`${apiEpisode}/${id}`, dataEpisode);

    if (res && res.data) return res.data;
  } catch (e) {
    console.log("error upload episode", e);
  }
};

const getEpisodeLink = async (id) => {
  try {
    const res = await axios.get(`${apiEpisode}/${id}`);
    if (res && res.data) {
      return res.data;
    }
  } catch (e) {
    console.log("error getting episode link", e);
  }
};

const getNation = async()=>{
  try{
    const res = await axios.get(api)
    if(res && res.data) return res.data
  }
  catch(e){
    console.log(e,"errores Get nation");
  }
}

export {
  getMovies,
  getMovieDetail,
  getEpisodeForMovieID,
  getEpisodeLink,
  getGenge,
  CreateMovie,
  deleteMovie,
  updateMovie,
  getMovieByGenge,
  createEpisode,
  uploadEpisode,
  uploadMovieView,
  getNation
};
