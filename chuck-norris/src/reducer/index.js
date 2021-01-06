import {
    FETCHING_JOKE_START,
    FETCHING_JOKE_SUCCESS,
    FETCHING_JOKE_ERROR
  } from "../actions";


const initialState = {
    isFetching: false,
    error: "",
    joke: ""
}

export const chuckReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCHING_JOKE_START:
        console.log("fetching a new joke");
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_JOKE_SUCCESS:
        return { ...state, joke: action.payload, isFetching: false };
      case FETCHING_JOKE_ERROR:
        return { ...state, error: action.payload, isFetching: false };
      default:
        return state;
    }
  };