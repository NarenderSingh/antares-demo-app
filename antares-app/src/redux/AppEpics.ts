import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { AppService } from "../services/AppService";
import { appActionMethod, APP_ACTION } from "./AppActions";
import { FORM_ACTION_KEY, FORM_KEY } from "./RootReducer";

const formActionkey = FORM_ACTION_KEY.APP;
const formKey = FORM_KEY.APP;

const appService = new AppService();

export const getAuthTokenEpic = (action$: any) =>
  action$.pipe(
    ofType(`${formActionkey}${APP_ACTION.GET_AUTH_TOKEN}`),
    mergeMap(() => {
      return from(appService.getAuthToken()).pipe(
        map((data: any) => {
          return appActionMethod.setAuthToken(data, formActionkey, formKey);
        }),
        catchError((e: any) => {
          return of(appActionMethod.setError(e, formActionkey, formKey));
        })
      );
    }),
    catchError((e: any) => {
      return of(appActionMethod.setError(e, formActionkey, formKey));
    })
  );

export const getAzureUsersEpic = (action$: any) =>
  action$.pipe(
    ofType(`${formActionkey}${APP_ACTION.GET_AZURE_USERS}`),
    mergeMap((d: any) => {
      const { authToken } = d?.payload?.data;
      return from(appService.getAzureUsers(authToken)).pipe(
        map((data: any) => {
          return appActionMethod.setAzureUsers(data, formActionkey, formKey);
        }),
        catchError((e: any) => {
          return of(appActionMethod.setError(e, formActionkey, formKey));
        })
      );
    }),
    catchError((e: any) => {
      return of(appActionMethod.setError(e, formActionkey, formKey));
    })
  );

export const getTeamChannelsEpic = (action$: any) =>
  action$.pipe(
    ofType(`${formActionkey}${APP_ACTION.GET_TEAM_CHANNELS}`),
    mergeMap((d: any) => {
      const { authToken } = d?.payload?.data;
      return from(appService.getTeamChannels(authToken)).pipe(
        map((data: any) => {
          return appActionMethod.setTeamChannels(data, formActionkey, formKey);
        }),
        catchError((e: any) => {
          return of(appActionMethod.setError(e, formActionkey, formKey));
        })
      );
    }),
    catchError((e: any) => {
      return of(appActionMethod.setError(e, formActionkey, formKey));
    })
  );
