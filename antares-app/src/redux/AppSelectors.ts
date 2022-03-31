import { IRootReducerState } from "./State";

export const appSelector = {
  getAppState: (state: IRootReducerState) => state?.App,
  getAuthToken: (state: IRootReducerState) => state?.App?.AuthToken,
  getUsers: (state: IRootReducerState) => state?.App?.Users,
  getChannels: (state: IRootReducerState) => state?.App?.Channels,
  getIsLoading: (state: IRootReducerState) => state?.App?.IsLoading,
  getHasError: (state: IRootReducerState) => state?.App?.HasError,
  getErrorMessage: (state: IRootReducerState) => state?.App?.ErrorMessage,
};
