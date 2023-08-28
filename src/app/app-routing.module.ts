import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomePreLoginComponent } from './home-pre-login/home-pre-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExperienceComponent } from './add-experience/add-experience.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-pre-login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [authGuard]
  },
  {
    path: 'home-pre-login',
    component: HomePreLoginComponent
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
    path: 'add-banner',
    component: BannerComponent,
     canActivate: [authGuard]
  },
  {
    path: 'list-experience',
    component: ExperienceListComponent,
    canActivate: [authGuard]
  }
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
