/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import * as CONSTANTS from "./AuthConstants";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

//AsyncStorage
storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error(error);
  }
};

//thunk functions

export function thunkFunc(arg) {
  return new Promise((resolve, reject) => {
    return (dispatch, getState) => {
      const param = getState();
      try {
        dispatch(actionFunc(arg, param));
        resolve("Dispatched");
      } catch (e) {
        reject(e);
        console.error(e);
      }
    };
  });
}

export function requestFunc() {
  return new Promise((resolve, reject) => {
    return (dispatch) => {
      axios
        .get("/route")
        .then((res) => {
          resolve({ message: "Ok", result: res });
          dispatch({ type: CONSTANTS.TYPE, payload: res });
        })
        .catch((e) => {
          reject(e);
          console.error(e);
        });
    };
  });
}

//normal actions
export function actionFunc(payload) {
  return {
    type: CONSTANTS.ACTION_TWO,
    payload: payload,
  };
}

//reducer
const initialState = {
  stateOne: "One",
  stateTwo: "2",
  stateThree: false,
};

export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONSTANTS.ACTION_TWO:
      return {
        ...state,
        stateOne: "Three",
      };
    default:
      return state;
  }
}
