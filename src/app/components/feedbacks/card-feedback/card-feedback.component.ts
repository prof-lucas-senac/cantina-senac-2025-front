import { Component } from '@angular/core';
import { Feedback } from './feedbacks';

@Component({
  selector: 'app-card-feedback',
  standalone: true,
  imports: [],
  templateUrl: './card-feedback.component.html',
  styleUrl: './card-feedback.component.css'
})
export class CardFeedbackComponent {
  feedback : Feedback = {
    descricao: "Descrição",
    nomeUsuario: "Nome do Usuário",
    numComentarios: 5
  }


}
