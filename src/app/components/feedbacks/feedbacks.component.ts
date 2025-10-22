import { Component } from '@angular/core';
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  feedbacks : Feedback[] = [
    {
      descricao: "Salve família",
      nomeUsuario: "Igor Carinha do Baú do One Piece",
      numComentarios: 3
    },
    {
      descricao: "ACORDA CARA",
      nomeUsuario: "Monerk",
      numComentarios: 5
    },
  ];
}
