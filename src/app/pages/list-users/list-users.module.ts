import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ListUsers } from "./list-users";

@NgModule({
    declarations: [
        ListUsers
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        ListUsers
    ],
    providers: [],
    bootstrap: [ListUsers]
})
export class ListUsersModule { }