import axios from "axios";
import { APP_CONST } from "../common/AppConst";

const API = {
  GET_AUTH_TOKEN: "GetAuthToken",
  GET_AZURE_USERS: "GetAzureUsers",
  GET_TEAM_CHANNELS: "GetTeamChannels",
};

export class AppService {
  public readonly SERVICE_URL = APP_CONST.API_PATH + "/data/";

  public getAuthToken = async () => {
    return await axios
      .get(`${this.SERVICE_URL}${API.GET_AUTH_TOKEN}`, {
        headers: {},
      })
      .then((d: any) => {
        console.log(d?.data);
        return d.data;
      })
      .catch((e: any) => {
        throw e;
      });
  };

  public getAzureUsers = async (authToken: string) => {
    return await axios
      .get(`${this.SERVICE_URL}${API.GET_AZURE_USERS}`, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((d: any) => {
        console.log(d?.data);
        return d.data;
      })
      .catch((e: any) => {
        throw e;
      });
  };

  public getTeamChannels = async (authToken: string) => {
    return await axios
      .get(`${this.SERVICE_URL}${API.GET_TEAM_CHANNELS}`, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((d: any) => {
        console.log(d?.data);
        return d.data;
      })
      .catch((e: any) => {
        throw e;
      });
  };
}
