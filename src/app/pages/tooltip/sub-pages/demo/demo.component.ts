import { Component } from '@angular/core';
import {
  ArrowPosition,
  TooltipService,
} from '../../core/service/tooltip.service';
import { TestToolTipComponent } from './examples/test-tool-tip/test-tool-tip.component';
import { ToolTipDirective } from '../../core/directives/tool-tip.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ToolTipDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  constructor(private tooltipService: TooltipService) {}

  openTooltipA(open: boolean, id: string, position: ArrowPosition) {
    if (!open) {
      this.tooltipService.close(id);
      return;
    }
    this.tooltipService
      .open(TestToolTipComponent, id, {
        blurBackground: true,
        arrowPosition: position,
      })
      .subscribe({
        next: (va) => {
          console.log(va);
        },
      });
  }

  openTooltipString(open: boolean, id: string, position: ArrowPosition) {
    if (!open) {
      this.tooltipService.close(id);
      return;
    }
    this.tooltipService
      .open('Hola tooltip', id, {
        blurBackground: true,
        arrowPosition: position,
      })
      .subscribe({
        next: (va) => {
          console.log(va);
        },
      });
  }
}
