
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../../interfaces/user";

export const UserListActions = createActionGroup({
  source: 'User List',
  events: {
    'List users requested': emptyProps(),
    'List users success': props<{users: User[]}>(),
    'List users error': props<{error: string}>(),
  }
});