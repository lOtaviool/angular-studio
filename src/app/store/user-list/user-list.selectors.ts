import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserListState } from "./user-list.reducer";

export const selectUserListState = createFeatureSelector<UserListState>('userList');

export const selectResults = createSelector(
  selectUserListState,
  (state) => state.users
);

export const selectLoading = createSelector(
  selectUserListState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUserListState,
  (state) => state.error
);