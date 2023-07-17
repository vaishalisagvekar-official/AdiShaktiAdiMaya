import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ResgisterComponent } from './auth/resgister/resgister.component';
import { HomePreLoginComponent } from './home-pre-login/home-pre-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component:HomePreLoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:ResgisterComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'home-pre-login',
    component:HomePreLoginComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
