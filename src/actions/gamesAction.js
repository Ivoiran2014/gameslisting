import axios from "axios";
import { popularGames_url, upcomingGames_url, newGames_url,searchGames_url } from "../api";

// Action Loader
export const loadGames = () => async (dispatch) => {
  // Fetch the url
  const popularData = await axios.get(popularGames_url());
  const upcomingData = await axios.get(upcomingGames_url());
  const newData = await axios.get(newGames_url());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      new: newData.data.results,
    },
  });
};

export const searchGames = (game_name) => async (dispatch) => {
  const searchedData = await axios.get(searchGames_url(game_name));

  dispatch({
    type:'FETCH_SEARCHED',
    payload:{
      searched:searchedData.data.results
    }
  });
}
