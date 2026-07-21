import { createReducer, on } from "@ngrx/store";
import { UserListActions } from "./user-list.actions";
import { User } from "../../interfaces/user";

export interface UserListState {
  users: User[];
  error: string | null;
  loading: boolean;
}

const initialState: UserListState = {
  users: [],
  loading: false,
  error: null,
};

export const userListReducer = createReducer(
  initialState,
  on(UserListActions.listUsersRequested, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UserListActions.listUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    users: users
  })),
  on(UserListActions.listUsersError, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
  on(UserListActions.updateUserRequested, (state) => ({
    ...state,
    loading: true
  })),
  on(UserListActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u),
    loading: false
  })),
  on(UserListActions.updateUserError, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
  on(UserListActions.deleteUserRequested, (state) => ({
    ...state,
    loading: true
  })),
  on(UserListActions.deleteUserSuccess, (state, { userId }) => ({
    ...state,
    users: state.users.filter(u => u.id !== userId),
    loading: false
  })),
  on(UserListActions.deleteUserError, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  }))
);