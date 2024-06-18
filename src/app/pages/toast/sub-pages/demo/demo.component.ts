import { Component } from '@angular/core';
import { ToastService } from '../../core/service/toast.service';
import { TestToasComponent } from './examples/test-toas/test-toas.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  //TODO una vez lo suba a git, actualizar con las url de cada seccion
  constructor(private toastService: ToastService) {}

  showToastOK() {
    this.toastService.open(TestToasComponent, {
      data: {
        cant: 3,
      },
    });
  }

  showToastWarning() {
    this.toastService.open(TestToasComponent, {
      styleType: 'ERROR',
      data: {
        cant: 3,
      },
    });
  }

  showToastLeftBottom() {
    this.toastService.open(TestToasComponent, {
      toastPosition: 'LEFT-BOTTOM',
      data: {
        cant: 3,
      },
    });
  }
  showToastRigthUP() {
    this.toastService.open(TestToasComponent, {
      toastPosition: 'RIGTH-TOP',
      styleType: 'WARNING',
      data: {
        cant: 3,
      },
    });
  }
  showToastLeftUp() {
    this.toastService.open(TestToasComponent, {
      toastPosition: 'LEFT-TOP',
      styleType: 'INFO',
      data: {
        cant: 3,
      },
    });
  }

  toastNoTimer() {
    this.toastService.open(TestToasComponent, {
      timerBar: { showTimeBar: false, seconds: 0 },
      data: {
        cant: 3,
      },
    });
  }
}
