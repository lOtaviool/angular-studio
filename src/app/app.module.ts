import { NgModule } from "@angular/core";
import { App } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { GitUserModule } from "./pages/git-user/git-user.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListUsersModule } from "./pages/list-users/list-users.module";
import { HomeModule } from "./pages/home/home.module";
import { StoreModule } from "@ngrx/store";
import { userListReducer } from "./store/user-list/user-list.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserListEffects } from "./store/user-list/user-list.effects";

@NgModule({
    declarations:[App],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({ userList: userListReducer }),
        EffectsModule.forRoot([UserListEffects]),
        HomeModule,
        GitUserModule,
        ListUsersModule,
    ],
    exports:[],
    providers: [],
    bootstrap:[App]
})

export class AppModule{};