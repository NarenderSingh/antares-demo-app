import "../App.css";
import { connect } from "react-redux";
import { FORM_ACTION_KEY, FORM_KEY } from "../redux/RootReducer";
import { appSelector } from "../redux/AppSelectors";
import { appActionMethod } from "../redux/AppActions";
import { useEffect } from "react";

const formKey = FORM_KEY.APP;
const actionKey = FORM_ACTION_KEY.APP;

interface IApp {
  authToken: string;
  users: any[];
  channels: any[];
  hasError: boolean;
  errorMessage: string;
  getAuthToken: any;
  getAzureUsers: any;
  getTeamChannels: any;
  isLoading: boolean;
}

const App = (props: IApp) => {
  const {
    authToken,
    users,
    channels,
    hasError,
    errorMessage,
    getAuthToken,
    getAzureUsers,
    getTeamChannels,
    isLoading,
  } = props;

  useEffect(() => {
    getAuthToken();
  }, [getAuthToken]);

  useEffect(() => {
    if (hasError) {
      console.log(errorMessage);
    }
  }, [hasError, errorMessage]);

  const onGetAuthToken = () => {
    getAuthToken();
  };

  const onGetAzureUsers = () => {
    getAzureUsers({ authToken });
  };

  const onGetTeamChannels = () => {
    getTeamChannels({ authToken });
  };

  return (
    <div className="App">
      <div className="App-header">
        <hr />
        {isLoading && <p>Loading data...</p>}
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button className="btn btn-info" onClick={onGetAuthToken}>
            Get Auth Token
          </button>
          <button className="btn btn-warning" onClick={onGetAzureUsers}>
            Get Azure Users
          </button>
          <button className="btn btn-secondary" onClick={onGetTeamChannels}>
            Get Team Channels
          </button>
        </div>
        <hr />
        <div className="container">
          {users?.length > 0 && (
            <table className="table table-sm table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">Display Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user: any, key: number) => (
                  <tr key={key}>
                    <td>{user?.displayName}</td>
                    <td>{user?.userPrincipalName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="container">
          {channels?.length > 0 && (
            <table className="table table-sm table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Created Date</th>
                </tr>
              </thead>
              <tbody>
                {channels?.map((channel: any, key: number) => (
                  <tr key={key}>
                    <td>{channel?.displayName}</td>
                    <td>{channel?.description}</td>
                    <td>{new Date(channel?.createdDateTime).toDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  authToken: appSelector.getAuthToken(state),
  users: appSelector.getUsers(state),
  channels: appSelector.getChannels(state),
  isLoading: appSelector.getIsLoading(state),
  hasError: appSelector.getHasError(state),
  errorMessage: appSelector.getErrorMessage(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getAuthToken: (payload: any) =>
    dispatch(appActionMethod.getAuthToken(payload, actionKey, formKey)),
  getAzureUsers: (payload: any) =>
    dispatch(appActionMethod.getAzureUsers(payload, actionKey, formKey)),
  getTeamChannels: (payload: any) =>
    dispatch(appActionMethod.getTeamChannels(payload, actionKey, formKey)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
