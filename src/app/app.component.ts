import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FeebacksComponent } from './components/feebacks/feebacks.component';
import { CardFeedbackComponent} from './components/feebacks/card-feedback/card-feedback.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,FeebacksComponent,CardFeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CantinaSenac';
}
