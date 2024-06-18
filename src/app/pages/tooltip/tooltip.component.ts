import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SubPagesNavBar,
  SubPagesRoute,
} from '../../shared/components/sup-pages-nav-bar/sub-pages-nav-bar.component';

@Component({
  selector: 'app-metricas',
  standalone: true,
  imports: [RouterModule, SubPagesNavBar],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css',
})
export class TooltipPageComponent {
  routes: SubPagesRoute[] = [{ title: 'Demo', url: 'demo' }];
}
