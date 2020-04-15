import { setCards, fetchCards } from './';
import { SET_CARDS, FETCH_CARDS, API_START, API_END } from './types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// initialise middlewares
const middlewares = [thunk];
// initialise MockStore which is only the configureStore method which take middlewares as its parameters
const mockStore = configureStore(middlewares);
//creating a mock instance from the MockAdapter of axios
const mock = new MockAdapter(axios); const store = mockStore({});

describe('setCards', () => {
  it('should create an action to SET_CARDS', () => {
    const data = {};
    const expectedAction = {
      type: SET_CARDS,
      payload: data
    }
    expect(setCards(data)).toEqual(expectedAction)
  })
});

describe('fetchCards', () => {
  // Runs before each test in the suite, putting this here if we add more tests in the future
  beforeEach(() => {
    store.clearActions();
  });
  it('should make get request, and dispatch API_START, SET_CARDS, and API_END', () => {
    // mock the axios.get
    mock.onGet('https://api.elderscrollslegends.io/v1/cards').reply(200, {
        data: [
            { dummyData: "for the test" }
        ]
    });

    store.dispatch(fetchCards(20)).then(() => {
        let expectedActions = [{
          type: API_START,
          payload: FETCH_CARDS
        },
          {
            type: SET_CARDS,
            payload: {
                data: [
                    { dummyData: "for the test" }
                ]
            }
        },
        {
          type: API_END,
          payload: FETCH_CARDS
        }]
        expect(store.getActions()).toEqual(expectedActions);
    });
  })
})
