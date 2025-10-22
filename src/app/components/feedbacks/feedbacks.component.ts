import { Component } from '@angular/core';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  feedbacks: Feedback[] = [
    {
      nomeUsuario: 'João Silva',
      descricao: 'top demaize',
      numComentarios: 3
    },
    {
      nomeUsuario: 'cr7 ',
      descricao: 'eu so o milior',
      numComentarios: 6
      
    },
  ];
}
