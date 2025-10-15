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
nomeUsuario: string = " ";
descricao : string = " ";
numComentarios: number = 0;

feedback: Feedback = {
descricao: "Descrição do feedback",
nomeUsuario: "Nome do usuário",
numComentarios: 0
}


}
