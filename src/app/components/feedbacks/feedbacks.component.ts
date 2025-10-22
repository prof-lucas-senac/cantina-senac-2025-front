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
  feedbacks : Feedback[] = [
    {
      descricao: "muito top",
      nomeUsuario: "igor2k",
      numComentarios: 3 
    },{
      descricao: "Acorda CAAAAARAA",
      nomeUsuario: "igor4k",
      numComentarios: 5
    },
  ];
}
