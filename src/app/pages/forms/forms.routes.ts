import { Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { ButtonsExamplesComponent } from './sub-pages/buttons-examples/buttons-examples.component';
import { SelectExampleComponent } from './sub-pages/select-example/select-example.component';

export const FORMS_ROUTES: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      { path: 'buttons', component: ButtonsExamplesComponent },
      { path: 'selects', component: SelectExampleComponent },
      { path: '', pathMatch: 'full', redirectTo: 'buttons' },
    ],
  },
];
