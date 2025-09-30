import { Routes } from '@angular/router';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: "feedbacks",
        component: FeedbacksComponent
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }
];
