import { Component } from '@angular/core';
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '../../../../node_modules/@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  feedbacks : Feedback[] = [];
  apiUrl = "http://localhost:4200/api/feedbacks";

  constructor (private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<Feedback[]>(this.apiUrl)
    .subscribe((feedbacks) => 
      {
        console.log(this.feedbacks)
        this.feedbacks = feedbacks
      }
    );
  }
}
