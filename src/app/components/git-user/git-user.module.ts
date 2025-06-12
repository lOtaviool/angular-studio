import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GitUser } from "./git-user";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        GitUser
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        GitUser
    ],
    providers: [],
    bootstrap: [GitUser]
})
export class GitUserModule { }