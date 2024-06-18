import { Routes } from '@angular/router';
import { ToastPageComponent } from './toast.component';
import { DemoComponent } from './sub-pages/demo/demo.component';

export const TOAST_ROUTES: Routes = [
  {
    path: '',
    component: ToastPageComponent,
    children: [
      { path: 'demo', component: DemoComponent },
      { path: '', pathMatch: 'full', redirectTo: 'demo' },
    ],
  },
];
