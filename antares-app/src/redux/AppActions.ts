export const APP_ACTION = {
  GET_AUTH_TOKEN: "GET_AUTH_TOKEN",
  SET_AUTH_TOKEN: "SET_AUTH_TOKEN",
  GET_AZURE_USERS: "GET_AZURE_USERS",
  SET_AZURE_USERS: "SET_AZURE_USERS",
  GET_TEAM_CHANNELS: "GET_TEAM_CHANNELS",
  SET_TEAM_CHANNELS: "SET_TEAM_CHANNELS",
  SET_ERROR: "SET_ERROR",
};

const getAuthToken = (payload: any, actionKey: string, formKey: string) => ({
  type: `${actionKey}${APP_ACTION.GET_AUTH_TOKEN}`,
  payload: {
    data: payload,
    actionKey: actionKey,
    formKey: formKey,
  },
});

const setAuthToken = (payload: any, actionKey: string, formKey: string) => ({
  type: `${actionKey}${APP_ACTION.SET_AUTH_TOKEN}`,
  payload: {
    data: payload,
    actionKey: actionKey,
    formKey: formKey,
  },
});

const getAzureUsers = (payload: any, actionKey: string, formKey: string) => ({
  type: `${actionKey}${APP_ACTION.GET_AZURE_USERS}`,
  payload: {
    data: payload,
    actionKey: actionKey,
    formKey: formKey,
  },
});

const setAzureUsers = (payload: any, actionKey: string, formKey: string) => ({
  type: `${actionKey}${APP_ACTION.SET_AZURE_USERS}`,
  payload: {
    data: payload,
    actionKey: actionKey,
    formKey: formKey,
  },
});

const getTeamChannels = (payload: any, actionKey: string, formKey: string) => ({
  type: `${actionKey}${APP_ACTION.GET_TEAM_CHANNELS}`,
  payload: {
    data: payload,
    actionKey: actionKey,
    formKey: formKey,
  },
});

const setTeamChannels = (payload: any, actionKey: string, formKey: string) => ({
  type: `${actionKey}${APP_ACTION.SET_TEAM_CHANNELS}`,
  payload: {
    data: payload,
    actionKey: actionKey,
    formKey: formKey,
  },
});

const setError = (payload: any, actionKey: string, formKey: string) => ({
  type: `${actionKey}${APP_ACTION.SET_ERROR}`,
  payload: {
    data: payload,
    actionKey: actionKey,
    formKey: formKey,
  },
});

export const appActionMethod = {
  getAuthToken: getAuthToken,
  setAuthToken: setAuthToken,
  getAzureUsers: getAzureUsers,
  setAzureUsers: setAzureUsers,
  getTeamChannels: getTeamChannels,
  setTeamChannels: setTeamChannels,
  setError: setError,
};
