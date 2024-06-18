import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { SubmitData } from '../service/modals.service';

@Component({
  selector: 'modal-TemplateConection',
  standalone: true,
  template: '',
})
export class TemplateConection {
  @Input() data?: any;

  closeEvent: Subject<void> = new Subject();
  submitEvent: Subject<SubmitData> = new Subject();

  close() {
    this.closeEvent.next();
  }

  submit(resp: SubmitData) {
    this.submitEvent.next(resp);
  }
}
