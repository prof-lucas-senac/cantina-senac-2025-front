import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FeebacksComponent } from './components/feebacks/feebacks.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "feedbacks",
        component: FeebacksComponent
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }
];
