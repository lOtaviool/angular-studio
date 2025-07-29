import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../../../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { UserEdit } from "./user-edit";

@NgModule({
    declarations: [
        UserEdit
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    
    ],
    exports:[
        UserEdit
    ],
    providers: [],
    bootstrap: [UserEdit]
})
export class UserEditModule { }