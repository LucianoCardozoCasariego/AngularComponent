import {
  AfterViewInit,
  Component,
  LOCALE_ID,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LateralNavbarComponent } from './shared/components/lateral-navbar/lateral-navbar.component';

import localeEs from '@angular/common/locales/es';
import { TooltipService } from './pages/tooltip/core/service/tooltip.service';
import { ModalsService } from './pages/Modal/core/service/modals.service';
import { ToastService } from './pages/toast/core/service/toast.service';
import { LateralNavService } from './services/lateral-nab.service';
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LateralNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('modalFactory', { read: ViewContainerRef })
  modalFactory!: ViewContainerRef;
  @ViewChild('tempToastFactory', { read: ViewContainerRef })
  toastFactory!: ViewContainerRef;
  @ViewChild('tooltipFactory', { read: ViewContainerRef })
  tooltipFactory!: ViewContainerRef;

  get isColapse() {
    return this.lateralNav.isColapse();
  }

  constructor(
    private modalService: ModalsService,
    private toastService: ToastService,
    private tooltipService: TooltipService,
    private lateralNav: LateralNavService
  ) {}

  ngAfterViewInit(): void {
    this.modalService.containerRef = this.modalFactory;
    this.toastService.containerRef = this.toastFactory;
    this.tooltipService.containerRef = this.tooltipFactory;
  }
}
