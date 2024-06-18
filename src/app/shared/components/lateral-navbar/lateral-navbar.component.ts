import { Component } from '@angular/core';
import { SvgDirective } from '../../directives/svg.directive';
import { IsActiveMatchOptions, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LateralNavService } from '../../../services/lateral-nab.service';
import { TooltipService } from '../../../pages/tooltip/core/service/tooltip.service';

@Component({
  selector: 'app-lateral-navbar',
  standalone: true,
  imports: [SvgDirective, RouterModule, CommonModule],
  templateUrl: './lateral-navbar.component.html',
  styleUrl: './lateral-navbar.component.css',
})
export class LateralNavbarComponent {
  get isColapse() {
    return this.lateralNav.isColapse();
  }

  FeatureLinkList = [
    {
      svgName: 'dashboard',
      title: 'Modal',
      url: 'modal',
    },
    {
      svgName: 'metricas',
      title: 'Tooltip',
      url: 'tooltip',
    },
    {
      svgName: 'onboarding',
      title: 'Toast',
      url: 'toast',
    },
    {
      svgName: 'reportes',
      title: 'Animations',
      url: 'animations',
    },
  ];

  ComponentLinkList = [
    {
      svgName: 'dashboard',
      title: 'Forms',
      url: 'forms',
    },
    {
      svgName: 'metricas',
      title: 'Card',
      url: 'card',
    },
  ];

  constructor(
    private router: Router,
    private lateralNav: LateralNavService,
    private tooltipService: TooltipService
  ) {}

  isCurrentRoute(routePath: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'subset',
      matrixParams: 'exact',
      queryParams: 'exact',
      fragment: 'exact',
    };
    return this.router.isActive(routePath, options);
  }

  onClic() {
    this.tooltipService.updatePosition.next(true);
    this.lateralNav.isColapse.set(!this.isColapse);
  }
}
