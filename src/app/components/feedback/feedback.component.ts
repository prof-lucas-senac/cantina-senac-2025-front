import { Component } from '@angular/core';
import { CardFeedbackComponent } from '../feedbacks/card-feedback/card-feedback.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CardFeedbackComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

}
