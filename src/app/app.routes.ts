import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },

    {
        path: "feedback",
        component: FeedbackComponent
    },

    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }
];
