import { Component } from '@angular/core';
import { Feedback } from './Feedback';

@Component({
  selector: 'app-card-feedback',
  standalone: true,
  imports: [],
  templateUrl: './card-feedback.component.html',
  styleUrl: './card-feedback.component.css'
})
export class CardFeedbackComponent {
  nomeUsuario: string = "";
  descricao: string = "";
  numComentarios: number = 0;

  feedback: Feedback = {
    descricao: "Descrição",
    nomeUsuario: "NomeUsuario",
   numComentarios : 0
  }
}
