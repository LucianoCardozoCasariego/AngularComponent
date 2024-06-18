import { Routes } from '@angular/router';
import { ModalPageComponent } from './modal.component';
import { DemoComponent } from './sub-pages/demo/demo.component';

export const MODAL_ROUTES: Routes = [
  {
    path: '',
    component: ModalPageComponent,
    children: [
      { path: 'demo', component: DemoComponent },
      { path: '', pathMatch: 'full', redirectTo: 'demo' },
    ],
  },
];
