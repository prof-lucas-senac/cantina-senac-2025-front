import { Component } from '@angular/core';
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent,NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {

  feedbacks : Feedback[] = [
      {
          descricao   : "Ótimo atendimento e comida deliciosa!",
          nomeUsuario : "Ana Silva",

      },

       {
          descricao   : "parabens",
          nomeUsuario : "Ricardo Lima",

      }

  ];

}
