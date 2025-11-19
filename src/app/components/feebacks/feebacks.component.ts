import { Component } from '@angular/core';
import { CardFeedbackComponent} from './card-feedback/card-feedback.component';
import { NgFor } from '@angular/common';
import { Feedback } from './card-feedback/feedback';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feebacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feebacks.component.html',
  styleUrl: './feebacks.component.css'
})
export class FeebacksComponent {
    constructor (private http : HttpClient) {}
    feedbacks : Feedback[] = [];
    ngOnInit() : void{
      this.http.get<Feedback[]>("http://localhost:4200/api/feedbacks")
      .subscribe((feedbacks) => this.feedbacks = feedbacks);
    }
}
