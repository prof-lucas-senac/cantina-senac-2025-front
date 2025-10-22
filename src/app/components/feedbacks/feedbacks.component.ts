import { Component } from '@angular/core';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { NgFor } from '../../../../node_modules/@angular/common';
import { Feedback } from './card-feedback/feedbacks';

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
      descricao: "Agora Vai!!!",
      nomeUsuario: "João",
      numComentarios: 3
    },

    {
      descricao: "Salve familia",
      nomeUsuario: "Maria",
      numComentarios: 5
    }
  ];


}
