import { Component } from '@angular/core';
import { CardFeedbackComponent} from './card-feedback/card-feedback.component';

@Component({
  selector: 'app-feebacks',
  standalone: true,
  imports: [CardFeedbackComponent],
  templateUrl: './feebacks.component.html',
  styleUrl: './feebacks.component.css'
})
export class FeebacksComponent {

}
