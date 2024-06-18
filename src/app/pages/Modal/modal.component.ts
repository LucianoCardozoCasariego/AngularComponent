import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SubPagesNavBar,
  SubPagesRoute,
} from '../../shared/components/sup-pages-nav-bar/sub-pages-nav-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SubPagesNavBar],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalPageComponent {
  routes: SubPagesRoute[] = [{ title: 'Demo', url: 'demo' }];
}
