import {
  SET_CARDS,
  CLEAR_CARDS,
  API_START,
  API_END
} from "../actions/types";

const cardReducer = (state = {cards:[]}, action) => {
  switch(action.type){
    case SET_CARDS:
      // apply fetched cards to store, Step 4 in api flow
      const cards = action.payload.cards;
      let updatedState = state;
      // if available grab the next api endpoint, save it
      if(action.payload._links && action.payload._links.next) {
        updatedState.next = action.payload._links.next;
      } else {
        updatedState.next = "LAST_PAGE";
      }
      updatedState.cards.push(...cards);
      return updatedState;
    case CLEAR_CARDS:
      return {
        ...state,
        cards: []
      };
    case API_START:
      return {
        ...state,
        isLoadingData: true
      };
    case API_END:
      return {
        ...state,
        isLoadingData: false
      };
    default:
      return state;
  }
}

export default cardReducer;

/*
Example response
{
  "cards":[
    {
      "name":"Raise Dead",
      "rarity":"Legendary",
      "type":"Action",
      "cost":2,
      "set":{
        "id":"cs",
        "name":"Core Set",
        "_self":"https://api.elderscrollslegends.io/v1/sets/cs"
      },
      "collectible":false,
      "text":"Summon a random creature from each discard pile.",
      "attributes":["Endurance"],
      "unique":false,
      "imageUrl":"https://images.elderscrollslegends.io/cs/raise_dead.png",
      "id":"ce7be2e72d6b06a52e50bed01952801ca4ecfade"
    },
  ],
  "_links":{
    "next":"https://api.elderscrollslegends.io/v1/cards?page=6&pageSize=1",
    "prev":"https://api.elderscrollslegends.io/v1/cards?page=4&pageSize=1"
  },
  "_pageSize":1,
  "_totalCount":1212
}
*/
