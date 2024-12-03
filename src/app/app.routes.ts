import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: 'home-pokemon',
        component: HomeComponent,
        canActivate: [authGuard]
    }
];

