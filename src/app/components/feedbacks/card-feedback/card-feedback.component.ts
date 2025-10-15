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
  feedback : Feedback = {
        nomeUsuario : "Samuel H",
        descricao : "Tudo top guri asljdhkajsdh asdjhkasjdhaskjkd askjdhakjsdhjkas daskjdhkasja asjkdhaskjdhkajssdadsa",
        numComentario : 3
    }
}
