import { DOCUMENT } from '@angular/common';
import {
  ComponentRef,
  Inject,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { TemplateToastComponent } from '../template-toast/template-toast.component';

export interface ITimeBar {
  showTimeBar: boolean;
  seconds: number;
}

export type ToastPosition =
  | 'LEFT-TOP'
  | 'LEFT-BOTTOM'
  | 'RIGTH-TOP'
  | 'RIGTH-BOTTOM';

export type StyleType = 'SUCCES' | 'WARNING' | 'INFO' | 'ERROR';

export interface ToastOptions {
  data?: any;
  openAnimation?: boolean;
  timerBar?: ITimeBar;
  closeAtClick?: boolean;
  toastPosition?: ToastPosition;
  styleType?: StyleType;
  emptyToast?: boolean;
  toastMargin?: number;
  openAnimationTime?: number;
}

export interface SubmitData {
  action: '[SUBMIT DATA]' | '[ACEPT]' | '[DENIED]' | CloseActions;
  value?: any;
}

export type CloseActions = '[CLOSE TOAST]' | '[CLOSE BY TIMEOUT]';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastComponentRef: ComponentRef<TemplateToastComponent> | null = null;
  private toastContainer: HTMLElement;
  private toastNotifier?: Subject<SubmitData>;
  container!: ViewContainerRef;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.toastContainer = document.createElement('div');
    document.body.appendChild(this.toastContainer);
  }

  set containerRef(ref: ViewContainerRef) {
    this.container = ref;
  }

  open(
    toastContent: Type<any>,
    options?: ToastOptions
  ): Observable<SubmitData> {
    this.closeToast('[CLOSE TOAST]');

    this.toastComponentRef = this.container.createComponent(
      TemplateToastComponent
    );

    this.toastComponentRef.instance.contenModalType = toastContent;

    if (options) {
      Object.assign(this.toastComponentRef.instance, options);
    } else {
      const defaultOptions: ToastOptions = {};
      Object.assign(this.toastComponentRef.instance, defaultOptions);
    }

    // Escuchar eventos del modal
    this.toastComponentRef.instance.closeEvent.subscribe(
      (value: CloseActions) => {
        this.closeToast(value);
      }
    );

    this.toastComponentRef.instance.submitEvent.subscribe(
      (value: SubmitData) => {
        this.submitToast(value);
      }
    );

    // Adjuntar el componente al DOM dentro del contenedor
    this.document.body.appendChild(
      this.toastComponentRef.location.nativeElement
    );

    this.toastNotifier = new Subject();
    return this.toastNotifier?.asObservable().pipe(take(1));
  }

  close(): void {
    if (this.toastComponentRef) {
      this.toastComponentRef.destroy();
      this.toastComponentRef = null;
    }
  }

  prepareFinalModalDataAndEvents(component: ComponentRef<any>, data: any) {
    component.instance.closeEvent.subscribe((value: CloseActions) => {
      this.closeToast(value);
    });

    component.instance.submitEvent.subscribe((value: SubmitData) => {
      this.submitToast(value);
    });

    component.setInput('data', data);
  }

  private closeToast(action: CloseActions): void {
    if (this.toastComponentRef) {
      this.toastComponentRef.destroy();
      this.toastComponentRef = null;
      this.toastNotifier?.next({ action });
    }
  }

  private submitToast(value: SubmitData): void {
    this.toastNotifier?.next(value);
  }
}
