import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-buttons-examples',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './buttons-examples.component.html',
  styleUrls: ['./buttons-examples.component.css', '../../forms.component.css'],
})
export class ButtonsExamplesComponent {}
