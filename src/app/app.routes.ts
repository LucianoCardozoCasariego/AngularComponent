import { Routes } from '@angular/router';
import { AnimationsComponent } from './pages/animations/animations.component';
import { FormsComponent } from './pages/forms/forms.component';
import { CardComponent } from './pages/card/card.component';

export const routes: Routes = [
  {
    path: 'modal',
    loadChildren: () =>
      import('./pages/Modal/modal.routes').then((m) => m.MODAL_ROUTES),
  },
  {
    path: 'tooltip',
    loadChildren: () =>
      import('./pages/tooltip/tooltip.routes').then((m) => m.TOOLTIP_ROUTES),
  },
  {
    path: 'toast',
    loadChildren: () =>
      import('./pages/toast/toast.routes').then((m) => m.TOAST_ROUTES),
  },
  {
    path: 'animations',
    loadChildren: () =>
      import('./pages/animations/animations.routes').then(
        (m) => m.ANIMATION_ROUTES
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./pages/forms/forms.routes').then((m) => m.FORMS_ROUTES),
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'modal',
  },
  {
    path: '**',
    redirectTo: 'modal',
  },
];
