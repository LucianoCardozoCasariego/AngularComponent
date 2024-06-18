import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SubPagesNavBar,
  SubPagesRoute,
} from '../../shared/components/sup-pages-nav-bar/sub-pages-nav-bar.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterModule, SubPagesNavBar],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastPageComponent {
  routes: SubPagesRoute[] = [{ title: 'Demo', url: 'demo' }];
}
