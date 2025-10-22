import { Component } from '@angular/core';
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { NgFor, NgForOf } from "../../../../node_modules/@angular/common";
import { Feedback } from './card-feedback/feedback';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent, NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
feedbacks : Feedback[] = [
 { 
   descricao: "Salve raça",
   nomeUsuario: "Jesus",
   numComentarios: 1,
 },
 { 
   descricao: "Salve Jorge",
   nomeUsuario:"Noé",
   numComentarios: 1,
 },
];
}
