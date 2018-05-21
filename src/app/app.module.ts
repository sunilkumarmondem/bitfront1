import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FlashMessagesModule } from 'ngx-flash-messages';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';

import { NavbarComponent } from './navbar/navbar.component';
import {AuthenticateService} from './authenticate.service';
import {ValidationService} from './validation.service';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from './auth.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DefaultComponent,
    NavbarComponent,
    ProfileComponent,
    UserdetailsComponent,
    SettingsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    HttpClientModule,
    FlashMessagesModule
   
  ],
  providers: [AuthenticateService,ValidationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
