import { Feedback } from "./feedback";
import { Component, Input, input } from "@angular/core";  

@Component({
    selector: 'app-card-feedback',
    standalone: true,
    imports: [],
    templateUrl: './card-feedback.component.html',
    styleUrls: ['./card-feedback.component.css']
})

export class CardFeedbackComponent {
    @Input()
    feedback : Feedback = {
    nomeUsuario: "",
    descricao: "",
    numComentarios: 0
}
}
