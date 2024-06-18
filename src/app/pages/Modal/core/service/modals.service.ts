import { DOCUMENT } from '@angular/common';
import {
  ComponentRef,
  Inject,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { TemplateModalComponent } from '../template-modal/template-modal.component';

export interface ModalOptions {
  data?: any;
  canCloseByBackground?: boolean;
  disableXicon?: boolean;
  title?: { content: string; leftSpace?: number };
}

export interface SubmitData {
  action: '[CLOSE MODAL]' | '[SUBMIT DATA]' | '[ACEPT]' | '[DENIED]';
  value?: any;
}

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  private modalComponentRef: ComponentRef<TemplateModalComponent> | null = null;
  private modalContainer: HTMLElement;
  private modalNotifier?: Subject<SubmitData>;
  container!: ViewContainerRef;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.modalContainer = document.createElement('div');
    document.body.appendChild(this.modalContainer);
  }

  set containerRef(ref: ViewContainerRef) {
    this.container = ref;
  }

  open(modal: Type<any>, options?: ModalOptions): Observable<SubmitData> {
    this.closeModal();

    this.modalComponentRef = this.container.createComponent(
      TemplateModalComponent
    );

    this.modalComponentRef.instance.contenModalType = modal;

    if (options) {
      options.canCloseByBackground = options.canCloseByBackground ?? true;
      options.disableXicon = options.disableXicon ?? false;
      Object.assign(this.modalComponentRef.instance, options);
    } else {
      const defaultOptions: ModalOptions = {
        canCloseByBackground: true,
        disableXicon: false,
      };
      Object.assign(this.modalComponentRef.instance, defaultOptions);
    }

    // Escuchar eventos del modal
    this.modalComponentRef.instance.closeEvent.subscribe(() => {
      this.closeModal();
    });

    this.modalComponentRef.instance.submitEvent.subscribe(
      (value: SubmitData) => {
        this.submitModal(value);
      }
    );

    // Adjuntar el componente al DOM dentro del contenedor
    this.document.body.appendChild(
      this.modalComponentRef.location.nativeElement
    );

    this.modalNotifier = new Subject();
    return this.modalNotifier?.asObservable().pipe(take(1));
  }

  close(): void {
    if (this.modalComponentRef) {
      this.modalComponentRef.destroy();
      this.modalComponentRef = null;
    }
  }

  prepareFinalModalDataAndEvents(component: ComponentRef<any>, data: any) {
    component.instance.closeEvent.subscribe(() => {
      this.closeModal();
    });

    component.instance.submitEvent.subscribe((value: SubmitData) => {
      this.submitModal(value);
    });

    component.setInput('data', data);
  }

  private closeModal(): void {
    if (this.modalComponentRef) {
      this.modalComponentRef.destroy();
      this.modalComponentRef = null;
      this.modalNotifier?.next({ action: '[CLOSE MODAL]' });
    }
  }

  private submitModal(value: SubmitData): void {
    this.modalNotifier?.next(value);
  }
}
