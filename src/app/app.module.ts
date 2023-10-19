import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePreLoginComponent } from './pages/home-pre-login/home-pre-login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/add-experience/add-experience.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminControlComponent } from './pages/admin-control/admin-control.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';

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
    AdminControlComponent,
    CoursesComponent,
    CourseComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    CardModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
