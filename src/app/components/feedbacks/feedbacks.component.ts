import { Component } from '@angular/core';
import { RouterOutlet } from "../../../../node_modules/@angular/router/index";

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {

}
