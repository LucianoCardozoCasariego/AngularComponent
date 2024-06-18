import { Routes } from '@angular/router';
import { TooltipPageComponent } from './tooltip.component';
import { DemoComponent } from './sub-pages/demo/demo.component';

export const TOOLTIP_ROUTES: Routes = [
  {
    path: '',
    component: TooltipPageComponent,
    children: [
      { path: 'demo', component: DemoComponent },
      { path: '', pathMatch: 'full', redirectTo: 'demo' },
    ],
  },
];
