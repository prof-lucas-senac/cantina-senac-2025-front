import { Component } from '@angular/core';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '@angular/common';

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
      descricao: "Alo garotas do mundo todo, o Rei Julian está na área e está bombando",
      nomeUsuario: "Rei Julian",
      numComentarios: 3
    },
    {
      descricao: "Eu conheço esse cachorro, eu tenho que lembrar se não não vou dormir, PERAI",
      nomeUsuario: "Pombo com TDAH",
      numComentarios: 5
    }
  ];
}
