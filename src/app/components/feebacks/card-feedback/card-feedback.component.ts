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
    nomeUsuario: "Urubu",
    descricao : "Os urubus são aves necrófagas que se alimentam principalmente de carcaças de animais mortos",
    numComentarios: 0,
  }
}

