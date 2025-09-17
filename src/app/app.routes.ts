import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "feedbacks",
        component: FeedbacksComponent
    },
    {
        path:"",
        redirectTo: "login",
        pathMatch: "full"
    }
];
