import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { CloseActions, SubmitData } from '../service/toast.service';

@Component({
  selector: 'toast-TemplateConection',
  standalone: true,
  template: '',
})
export class ToastTemplateConection {
  @Input() data?: any;
  closeEvent: Subject<CloseActions> = new Subject();
  submitEvent: Subject<SubmitData> = new Subject();

  close(value: CloseActions) {
    this.closeEvent.next(value);
  }

  submit(resp: SubmitData) {
    this.submitEvent.next(resp);
  }
}
