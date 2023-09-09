import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePreLoginComponent } from './pages/home-pre-login/home-pre-login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/add-experience/add-experience.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ExperienceListComponent } from './pages/experience-list/experience-list.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminControlComponent } from './pages/admin-control/admin-control.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePreLoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ExperienceComponent,
    BannerComponent,
    ExperienceListComponent,
    AdminControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
