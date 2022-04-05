import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/home/components/search/search.component';
import { ResultsComponent } from './pages/home/components/results/results.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { MymovielistComponent } from './myMovieList/mymovielist/mymovielist.component'

const routes: Routes = [
  {
     path:'',
     redirectTo:'/searchmovie',
     pathMatch:'full'

  },
  {
      path: 'searchmovie',
      component: SearchComponent

  },
  {
      path: 'mymovielist',
      component: MymovielistComponent
  }, 
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ResultsComponent,
    RegisterComponent,
    LoginComponent,
    MymovielistComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
