import axios from "axios";
import { SET_CARDS, CLEAR_CARDS, API_START, API_END } from "./types";

export function fetchCards(fetchUrl) {
  return function(dispatch) {
    // start loading gif
    dispatch(apiStart());
    // axios get request to the end point, Step 2 in api flow
    return axios.get(fetchUrl).then(({ data }) => {
      // dispatch a SET_CARDS action Step 3 in api flow
      dispatch(setCards(data));
    }).finally(() => {
      // end loading gif
      dispatch(apiEnd());
    });
  };
}

export function setCards(data) {
  return {
    type: SET_CARDS,
    payload: data
  };
}

export function seachUpdate(nameQuery) {
  return function(dispatch) {
    const apiUrl = nameQuery.length > 0 ? "https://api.elderscrollslegends.io/v1/cards?pageSize=20&name=" + nameQuery : "https://api.elderscrollslegends.io/v1/cards?pageSize=20";
    dispatch(clearCards());
    return dispatch(fetchCards(apiUrl));
  }
}

function clearCards() {
  return {
    type: CLEAR_CARDS
  };
}

function apiStart() {
  return {
    type: API_START
  };
}

function apiEnd() {
  return {
    type: API_END
  };
}
