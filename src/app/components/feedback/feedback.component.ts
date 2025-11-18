import { Component } from '@angular/core';
import { CardFeedbackComponent } from "../feedbacks/card-feedback/card-feedback.component";
import { Feedback } from '../feedbacks/card-feedback/feedback';
import { NgFor } from '../../../../node_modules/@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  constructor (private http : HttpClient) {}

  feedbacks : Feedback[] = [];

  ngOnInit(): void {
    this.http.get<Feedback[]>("http://localhost:4200/api/feedbacks").subscribe((feedbacks) => this.feedbacks = feedbacks);
  }
}
