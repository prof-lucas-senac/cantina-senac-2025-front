import { Component } from '@angular/core';
import { } from '@angular/router';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {

}
