import { Component } from '@angular/core';
import { CardFeedbackComponent} from './card-feedback/card-feedback.component';
import { NgFor } from '@angular/common';
import { Feedback } from './card-feedback/feedback';

@Component({
  selector: 'app-feebacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feebacks.component.html',
  styleUrl: './feebacks.component.css'
})
export class FeebacksComponent {
  feedbacks : Feedback[] = [
    {
      nomeUsuario: "Urubu",
      descricao: "Os urubus são aves necrófagas que se alimentam principalmente de carcaças de animais mortos"
    },
    {
      nomeUsuario: "Canários",
      descricao: "Os canários são aves conhecidas por suas cores vibrantes e cantos melodiosos. Eles têm uma origem nas Ilhas Canárias e foram domesticados a partir de aves selvagens."
    }
  ];
}
