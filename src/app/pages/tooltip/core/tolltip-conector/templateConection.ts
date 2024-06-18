import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CloseData,
  SubmitData,
  CloseActions,
} from '../service/tooltip.service';

@Component({
  selector: 'tooltip-TemplateConection',
  standalone: true,
  template: '',
})
export class TooltipTemplateConection {
  @Input() data?: any;
  _closeEvent: Subject<CloseData> = new Subject();
  _submitEvent: Subject<SubmitData> = new Subject();

  close(value: CloseActions) {
    this._closeEvent.next({ action: value, id: this.data.tooltipID });
  }

  submit(resp: SubmitData) {
    this._submitEvent.next({ ...resp, id: this.data.tooltipID });
  }
}
