import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from './auth.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
{path:'',redirectTo:'/default',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'default',component:DefaultComponent},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
{path:'profile',component:ProfileComponent},
{path:'userdetails/:_id',component:UserdetailsComponent},
{path:'settings',component:SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
