import { Component } from '@angular/core';
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '../../../../node_modules/@angular/common';
import { httpclient } from '@angular/common/http';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  feedbacks : Feedback[] = [ ];
}
