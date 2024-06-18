import { Component } from '@angular/core';
import {
  SubPagesNavBar,
  SubPagesRoute,
} from '../../shared/components/sup-pages-nav-bar/sub-pages-nav-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [RouterModule, SubPagesNavBar],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.css',
})
export class AnimationsComponent {
  routes: SubPagesRoute[] = [{ title: 'Demo', url: 'demo' }];
}
