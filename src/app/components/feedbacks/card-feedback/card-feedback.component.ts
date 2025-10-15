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

  feedback: Feedback = {
    nomeUsuario: "nome de usuario",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugit doloribus possimus atque sint, eaque tenetur cupiditate cum excepturi in animi porro a asperiores voluptates saepe dignissimos repellat est placeat?",
    numComentarios: 3
  }
}
