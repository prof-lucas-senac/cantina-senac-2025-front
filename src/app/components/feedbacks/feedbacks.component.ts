import { Component } from '@angular/core';
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { Feedback } from './card-feedback/Feedback';
import { NgFor } from "../../../../node_modules/@angular/common";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {

  feedbacks: Feedback[] = [];

  constructor(private http: HttpClient) { }

  ngOnInt() : void {
    this.http.get<Feedback[]>("http://localhost:4200/api/feedbacks")
    .subscribe((feedbacks)=> this.feedbacks = feedbacks);
  }
}
