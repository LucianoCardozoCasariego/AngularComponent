import { Component } from '@angular/core';
import { TooltipTemplateConection } from '../../../../core/tolltip-conector/templateConection';

@Component({
  selector: 'app-test-tool-tip',
  standalone: true,
  imports: [],
  templateUrl: './test-tool-tip.component.html',
  styleUrl: './test-tool-tip.component.css',
})
export class TestToolTipComponent extends TooltipTemplateConection {
  sendData() {
    this.submit({ action: '[ACEPT]', value: 'desdel componente test tooltip' });
  }
  closeTooltip() {
    this.close('[CLOSE TOOLTIP]');
  }
}
