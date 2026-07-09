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
}