import { Component } from '@angular/core';
import { } from '@angular/router';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { Feedback } from './card-feedback/feedback';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CardFeedbackComponent,NgFor],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
    feedbacks: Feedback  [] =[{
      descricao: "BAZINGA!!!",
      nomeUsuario: "Sheldon Cooper",
      numComentarios: 4
    },
    {  descricao: "EU TENHO SEU ANEL",
      nomeUsuario: "Bilbo Bolseiro",
      numComentarios: 10
    }
    
    
    
    ];
}
