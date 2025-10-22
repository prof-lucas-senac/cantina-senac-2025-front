import { Component, Input } from '@angular/core';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { NgFor } from "../../../../node_modules/@angular/common";
import { Feedback } from './card-feedback/feedback';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent
{
  feedbacks : Feedback[] = 
  [
    {
      descricao : "cepo de maderaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      nomeUsuario : "cleito rasta",
    },
    {
      descricao : "cepo de madera",
      nomeUsuario : "cleito rasta",
    }
  ];
}
