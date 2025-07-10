import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { Home } from "./home";
import { ListUsersModule } from "../list-users/list-users.module";
import { GitUserModule } from "../git-user/git-user.module";
import { SidebarModule } from "../../components/sidebar/sidebar.module";

@NgModule({
    declarations: [
        Home,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ListUsersModule,
        GitUserModule,
        SidebarModule

    ],
    exports:[
        Home
    ],
    providers: [],
    bootstrap: [Home]
})
export class HomeModule { }