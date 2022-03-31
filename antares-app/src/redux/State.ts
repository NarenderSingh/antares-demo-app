export const AppReducerState: IAppReducerState = {
  AuthToken: "",
  Users: [],
  Channels: [],
  IsLoading: false,
  HasError: false,
  ErrorMessage: "",
};

export interface IAppReducerState {
  AuthToken: string;
  Users: any[];
  Channels: any[];
  IsLoading: boolean;
  HasError: boolean;
  ErrorMessage: string;
}

export const RootReducerState: IRootReducerState = {
  App: AppReducerState,
};

export interface IRootReducerState {
  App: IAppReducerState;
}
