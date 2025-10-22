import { Component, Input, input } from '@angular/core';
import { Feedback } from './feedback';

@Component({
  selector: 'app-card-feedback',
  standalone: true,
  imports: [],
  templateUrl: './card-feedback.component.html',
  styleUrl: './card-feedback.component.css'
})
export class CardFeedbackComponent {
  @Input()
  feedback: Feedback = {
    nomeUsuario: "",
    descricao: "",
    numComentarios: 0
  }


}
