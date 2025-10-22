import { Component } from '@angular/core';
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { Feedback } from './card-feedback/Feedback';
import { NgFor } from "../../../../node_modules/@angular/common";

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
descricao: "salve",
nomeUsuario: "Jão"

},
  {
descricao: "salve",
nomeUsuario: "Jão"

}
];
}
