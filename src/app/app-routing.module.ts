import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HomePreLoginComponent } from './pages/home-pre-login/home-pre-login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ExperienceComponent } from './pages/add-experience/add-experience.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ExperienceListComponent } from './pages/experience-list/experience-list.component';
import { authGuard } from './auth/auth.guard';
import { AdminControlComponent } from './pages/admin-control/admin-control.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-pre-login',
    pathMatch: 'full'
  },
  {
    path: 'home-pre-login',
    component: HomePreLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'add-experience',
    component: ExperienceComponent,
    canActivate: [authGuard]
  },
  {
    path: 'list-experience',
    component: ExperienceListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'add-banner',
    component: BannerComponent,
     canActivate: [authGuard]
  },
  {
    path: 'admin-control',
    component: AdminControlComponent,
     canActivate: [authGuard]
  },
  // {
  //   path:'**',
  //   component:PageNotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
