import { inject, Injectable } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserListActions } from "./user-list.actions";
import { catchError, distinctUntilChanged, map, of, switchMap } from "rxjs";

@Injectable()
export class UserListEffects {
    private actions$ = inject(Actions);
    private userService = inject(UserService)

    userList$ = createEffect(() => this.actions$.pipe(
        ofType(UserListActions.listUsersRequested),
        distinctUntilChanged(),
        switchMap(() => this.userService.getListUser().pipe(
            map((users) => UserListActions.listUsersSuccess({ users })),
            catchError((error) => of(UserListActions.listUsersError({ error: error.message })))
        ))
    ));

    updateUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserListActions.updateUserRequested),
        distinctUntilChanged(),
        switchMap(({ userId, name }) => this.userService.updateUserName(userId, name).pipe(
            map((updatedUser) => UserListActions.updateUserSuccess({ user: updatedUser })),
            catchError((error) => of(UserListActions.updateUserError({ error: error.message })))
        ))
    ));

    deleteUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserListActions.deleteUserRequested),
        distinctUntilChanged(),
        switchMap(({ userId }) => this.userService.deleteUser(userId).pipe(
            map(() => UserListActions.deleteUserSuccess({ userId })),
            catchError((error) => of(UserListActions.deleteUserError({ error: error.message })))
        ))
    ));

    reloadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserListActions.updateUserSuccess, UserListActions.deleteUserSuccess),
            map(() => UserListActions.listUsersRequested())
        )
    );
}