import { APP_CONST } from "../common/AppConst";
import { APP_ACTION } from "./AppActions";
import { AppReducerState, IAppReducerState } from "./State";

export const appReducerHoR = (actionKey = APP_CONST.EMPTY_STRING) => {
  return (state: IAppReducerState = AppReducerState, action: any) => {
    const { type, payload } = action;

    switch (type) {
      case `${actionKey}${APP_ACTION.GET_AUTH_TOKEN}`:
      case `${actionKey}${APP_ACTION.GET_AZURE_USERS}`:
      case `${actionKey}${APP_ACTION.GET_TEAM_CHANNELS}`: {
        return {
          ...state,
          IsLoading: true,
        };
      }
      case `${actionKey}${APP_ACTION.SET_AUTH_TOKEN}`: {
        const { data } = payload;
        return {
          ...state,
          IsLoading: false,
          AuthToken: "Bearer " + data,
        };
      }
      case `${actionKey}${APP_ACTION.SET_AZURE_USERS}`: {
        const { data } = payload;
        return {
          ...state,
          IsLoading: false,
          Users: data,
          Channels: [],
        };
      }
      case `${actionKey}${APP_ACTION.SET_TEAM_CHANNELS}`: {
        const { data } = payload;
        return {
          ...state,
          IsLoading: false,
          Channels: data,
          Users: [],
        };
      }
      case `${actionKey}${APP_ACTION.SET_ERROR}`: {
        const { data } = payload;
        return {
          ...state,
          IsLoading: false,
          HasError: true,
          ErrorMessage: data,
        };
      }
      default:
        return state;
    }
  };
};
