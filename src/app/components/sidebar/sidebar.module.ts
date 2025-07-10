import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { Sidebar } from "./sidebar";

@NgModule({
    declarations: [
        Sidebar
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        Sidebar
    ],
    providers: [],
    bootstrap: [Sidebar]
})
export class SidebarModule { }