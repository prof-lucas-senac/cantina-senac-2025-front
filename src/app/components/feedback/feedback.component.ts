import { Component } from '@angular/core';
import { CardFeedbackComponent } from "../feedbacks/card-feedback/card-feedback.component";
import { Feedback } from '../feedbacks/card-feedback/feedback';
import { NgFor } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbacks : Feedback[] = [
    {
       descricao : "Incrível!",
       nomeUsuario : "Leonard Hofstadter",
       numComentarios : 3
    },
    {
       descricao : "Muito bom!",
       nomeUsuario : "Isa",
       numComentarios : 5
    }
  ];
}
