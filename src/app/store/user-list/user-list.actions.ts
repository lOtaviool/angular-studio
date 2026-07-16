
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../../interfaces/user";

export const UserListActions = createActionGroup({
  source: 'User List',
  events: {
    'List users requested': emptyProps(),
    'List users success': props<{users: User[]}>(),
    'List users error': props<{error: string}>(),
    'Update user requested': props<{userId: string, name: string}>(),
    'Update user success': props<{user: any}>(),
    'Update user error': props<{error: string}>(),
    'Delete user requested': props<{userId: string}>(),
    'Delete user success': props<{userId: string}>(),
    'Delete user error': props<{error: string}>()
  }
});