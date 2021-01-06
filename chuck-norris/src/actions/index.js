import axios from "axios";

export const FETCHING_JOKE_START = "FETCHING_JOKE_START";
export const FETCHING_JOKE_SUCCESS = "FETCHING_JOKE_SUCCESS";
export const FETCHING_JOKE_ERROR = "FETCHING_JOKE_ERROR";

const headers = {
    Accept: "application/json"
  };

export const getJoke = () => dispatch => {
   console.log("getJoke action");
   dispatch({ type: FETCHING_JOKE_START });
   axios
     .get("https://api.chucknorris.io/jokes/random", {headers:headers})
     .then((res) => {
        dispatch({ type: FETCHING_JOKE_SUCCESS, payload: res.data.value });
        console.log("API Response: ", res.data.value);
})
.catch((err) => {
    dispatch({
      type: FETCHING_JOKE_ERROR,
      payload: `${err.response.message} code: ${err.response.code}`
    });
    console.log(err);
  });
};