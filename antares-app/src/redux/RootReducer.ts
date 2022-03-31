import { combineReducers } from "redux";
import { appReducerHoR } from "./AppReducer";

export enum FORM_KEY {
  APP = "App",
}

export enum FORM_ACTION_KEY {
  APP = "APP_",
}

export const reducers = {
  App: appReducerHoR(FORM_ACTION_KEY.APP),
};

export const rootReducer = combineReducers(reducers);
