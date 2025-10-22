import { Component,  } from '@angular/core';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '../../../../node_modules/@angular/common';


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
    descricao : "Pão bão",
    nomeUsuario : "Pedro Gabriel",
    numComentarios : 5
  },
   {
    descricao : "Pão bão",
    nomeUsuario : "Pedro Gabriel",
    numComentarios : 5
   }
];
}
