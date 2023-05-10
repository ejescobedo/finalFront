import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import  { AgmCoreModule } from '@agm/core';
import { environment } from "src/environments/environment";

import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms'; 

import { BrowserModule } from "@angular/platform-browser";

import { NoopAnimationsModule } from "@angular/platform-browser/animations";


import { NavigationComponent } from "./components/navigation/navigation.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DisplayComponent } from './pages/display/display.component';





@NgModule({
    declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, SignupComponent, LoginComponent, HomeComponent, DisplayComponent],
    providers: [AuthService],
    bootstrap: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        CommonModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
    ]
})
export class AppModule {}
