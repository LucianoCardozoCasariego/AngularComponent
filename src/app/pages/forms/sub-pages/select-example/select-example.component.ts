import { Component } from '@angular/core';
import {
  SelectComponent,
  SelectOption,
  SelectStyles,
} from '../../components/select/select.component';

@Component({
  selector: 'app-select-example',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.css', '../../forms.component.css'],
})
export class SelectExampleComponent {
  items: SelectOption[] = [
    { title: 'titulo', value: '1' },
    { title: 'titulo2', value: '2' },
    { title: 'titulo3', value: '3' },
    { title: 'titulo', value: '1' },
    { title: 'titulo2', value: '2' },
    { title: 'titulo3', value: '3' },
    { title: 'titulo', value: '1' },
    { title: 'titulo2', value: '2' },
    { title: 'titulo3', value: '3' },
    { title: 'titulo', value: '1' },
    { title: 'titulo2', value: '2' },
    { title: 'titulo3', value: '3' },
    { title: 'titulo', value: '1' },
    { title: 'titulo2', value: '2' },
    { title: 'titulo3', value: '3' },
    { title: 'titulo', value: '1' },
    { title: 'titulo2', value: '2' },
    { title: 'titulo3', value: '3' },
  ];

  styles: SelectStyles = {
    selectWidth: 250,
    displayHeight: 40,

    centerOptions: true,
    optionPading: '20px 0px',
    maxHeight: 350,
  };

  listen(val: SelectOption | null) {
    console.log(val);
  }
}
