import axios from "axios";
import { gamesDetail_url ,gameScreenshot_url} from "../api";

// Detail Action Loader
export const loadDetailAction = (game_id) => async (dispatch) => {
    // Fetch the detail url
    const detailData = await axios.get(gamesDetail_url(game_id));
    const screenShotData = await axios.get(gameScreenshot_url(game_id));

    dispatch({
        type:'LOADING_DETAIL'
    });

    dispatch({
        type:'GET_DETAIL',
        payload : {
            data:detailData.data,
            screenshot:screenShotData.data
        }
    });
}