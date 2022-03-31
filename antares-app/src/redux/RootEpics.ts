import { combineEpics } from "redux-observable";
import {
  getAuthTokenEpic,
  getAzureUsersEpic,
  getTeamChannelsEpic,
} from "./AppEpics";

export const rootEpic = combineEpics(
  getAuthTokenEpic,
  getAzureUsersEpic,
  getTeamChannelsEpic
);
