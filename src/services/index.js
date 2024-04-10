import axios from "axios";
const apiMovie = "http://localhost:3000/Movies";
const apiEpisode = "http://localhost:3000/episode";
const apiEpisodeLink = "http://localhost:3000/episodeLinks"

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

const getMovieDetail = async (id) => {
  try {
    const res = await axios.get(`${apiMovie}/${id}`);
    if (res && res.data) return res.data;
    console.log(res.data);
  } catch (error) {
    throw new Error("fetchMoviesDetail Error: " + error);
  }
};


const getEpisodeForMovieID = async(movie_ID)=>{
    try{
        const res = await axios.get(`${apiEpisode}?movie_ID=${movie_ID}`)
        if (res && res.data) return res.data;

    }
    catch(e){
        console.log('error getting episode' , e);
    }
}

const getEpisodeLink = async(episode_id)=>{
  try{
    const res = await axios.get(`${apiEpisodeLink}/${episode_id}`)
    if(res && res.data) return res.data;
  }
  catch(e){
    console.log('error getting episode link' , e);
  }
}

export { getMovies, getMovieDetail, getEpisodeForMovieID ,getEpisodeLink };
