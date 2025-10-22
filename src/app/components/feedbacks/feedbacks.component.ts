import { Component } from '@angular/core';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '../../../../node_modules/@angular/common/';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  feedbacks : Feedback [] = [
    {
    nomeUsuario:  "Galo Cego " ,
    descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    numComentarios : 5,
  } ,
  {
    nomeUsuario:  "Jão Cego",
    descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    numComentarios : 3,
  }
   ,
  {
    nomeUsuario:  "Galizé do Brau",
    descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    numComentarios : 6,
  }
  ];
}
