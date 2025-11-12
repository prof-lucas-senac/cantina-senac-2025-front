import { Component } from '@angular/core';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { NgFor } from '@angular/common';  
import { Feedback } from './card-feedback/feedback';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CardFeedbackComponent,NgFor],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  feedbacks : Feedback[] = [];

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Feedback[]>("http://localhost:4200/api/feedbacks")
    .subscribe((feedbacks) => this.feedbacks = feedbacks);
  }
}


