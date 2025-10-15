import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {FeedbacksComponent} from './components/feedbacks/feedbacks.component';
import { CardFeedbackComponent } from './components/feedbacks/card-feedback/card-feedback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FeedbacksComponent, CardFeedbackComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CantinaSenac';
}

// var contador = 0;



// document.getElementById("botaoPrincipal").addEventListener("click", function(){
    
//     contador += 1;
//     document.getElementById("cont").textContent = contador;    
// });
