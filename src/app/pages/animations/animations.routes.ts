import { Routes } from '@angular/router';
import { AnimationsComponent } from './animations.component';
import { Example1Component } from './sub-pages/example1/example1.component';

export const ANIMATION_ROUTES: Routes = [
  {
    path: '',
    component: AnimationsComponent,
    children: [
      { path: 'demo', component: Example1Component },
      { path: '', pathMatch: 'full', redirectTo: 'demo' },
    ],
  },
];
