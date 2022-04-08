import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { MymovielistComponent } from "./myMovieList/mymovielist/mymovielist.component";
import { SearchComponent } from "./pages/home/components/search/search.component";

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
        component: MymovielistComponent,
        canActivate: [AuthGuard]
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}