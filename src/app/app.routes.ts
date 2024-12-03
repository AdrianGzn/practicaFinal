import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';

export const routes: Routes = [
    {
        path: "./",
        component: LoginComponent
    },
    {
        path: './Home',
        component: HomeComponent
    }
];

