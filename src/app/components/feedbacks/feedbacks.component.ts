import { Component } from '@angular/core';
import { CarFeedbackComponent } from './car-feedback/car-feedback.component';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CarFeedbackComponent],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {

}
