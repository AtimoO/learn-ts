import { Dispatch } from "redux";
import { IUser } from "../../types/types";
import { UserAction, UserActionTypes } from "../../types/users";
import { getUsers } from "../../utils/api";

export function getUsersList() {
  return function (dispatch: Dispatch<UserAction>) {
    dispatch({
      type: UserActionTypes.FETCH_USERS,
    });
    getUsers()
      .then((res) => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: res,
        });
      })
      .catch(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_FAILED,
          payload: "Error 404",
        });
      });
  };
}
