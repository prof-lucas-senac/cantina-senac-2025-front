import { Component, Input } from '@angular/core';
import { Feedback } from './feedbacks';

@Component({
  selector: 'app-card-feedback',
  standalone: true,
  imports: [],
  templateUrl: './card-feedback.component.html',
  styleUrl: './card-feedback.component.css'
})
export class CardFeedbackComponent {
  @Input()
  feedback : Feedback = {
    descricao: "",
    nomeUsuario: "",
    numComentarios: 0
  }


}
