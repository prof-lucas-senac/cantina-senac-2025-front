import { Component } from '@angular/core';
import { Feedback } from './feedback';

@Component({
  selector: 'app-card-feedback',
  standalone: true,
  imports: [],
  templateUrl: './card-feedback.component.html',
  styleUrl: './card-feedback.component.css'
})
export class CardFeedbackComponent {
  feedback : Feedback = {
    nomeUsuario:  "Galo Cego",
    descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    numComentarios : 0,
  }
}
