import { DOCUMENT } from '@angular/common';
import {
  ComponentRef,
  Inject,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TemplateTooltipComponent } from '../template-tooltip/template-tooltip.component';

export interface ReferenceTargetObject {
  position?: any;
  element?: HTMLElement;
  id?: string;
}

export interface TooltipSeparation {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export interface TooltipOptions {
  data?: any;
  showArrow?: boolean;
  blurBackground?: boolean;
  closeBackground?: boolean;
  separation?: TooltipSeparation;
  arrowPosition?: ArrowPosition;
}

export type ArrowPosition = 'BOTTOM' | 'TOP' | 'LEFT' | 'RIGHT';

export interface SubmitData {
  action: '[SUBMIT DATA]' | '[ACEPT]' | '[DENIED]' | CloseActions;
  id?: string;
  value?: any;
}

export interface CloseData {
  action: CloseActions;
  id: string;
}

export type CloseActions = '[CLOSE TOOLTIP]';

type ComponentToolTipRef = {
  id?: string;
  template: ComponentRef<TemplateTooltipComponent> | null;
};

@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  private tooltipComponentRef: ComponentToolTipRef[] = [];
  private tooltipNotifier?: Subject<SubmitData>; // es lo que retorna el open
  container!: ViewContainerRef; //se setea en al App, es donde se montan todos los tooltips

  elementDirectiveDataList = new BehaviorSubject<ReferenceTargetObject[]>([]);
  isTooltipOpen = new BehaviorSubject<{ isOpen: boolean; id?: string }[]>([]);
  updatePosition = new BehaviorSubject<boolean>(false);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  set containerRef(ref: ViewContainerRef) {
    this.container = ref;
  }

  open(
    tooltipContent: Type<any> | string,
    id: string,
    options?: TooltipOptions
  ): Observable<SubmitData> {
    const currentTooltipList = this.isTooltipOpen.value.filter(
      (a) => a.id != id
    );
    this.isTooltipOpen.next([...currentTooltipList, { isOpen: true, id }]);

    const template = this.container.createComponent(TemplateTooltipComponent);
    this.tooltipComponentRef.push({
      id: id,
      template: template,
    });

    if (typeof tooltipContent == 'string') {
      const tooltip = this.document.createElement('p');
      tooltip.innerText = tooltipContent;
      template.instance.basicTooltipContent = tooltip;
    } else {
      template.instance.contenModalType = tooltipContent;
    }

    if (options) {
      const dataWithID = { ...options.data, tooltipID: id };
      Object.assign(template.instance, { ...options, data: dataWithID });
    } else {
      const defaultOptions: TooltipOptions = { data: { tooltipID: id } };
      Object.assign(template.instance, defaultOptions);
    }

    // Escuchar eventos del modal
    template.instance._closeEvent.subscribe((value: CloseData) => {
      this.closeTooltip(value.action, value.id);
    });

    template.instance._submitEvent.subscribe((value: SubmitData) => {
      this.submitTooltip(value);
    });

    // Adjuntar el componente al DOM dentro del contenedor
    this.document.body.appendChild(template.location.nativeElement);

    this.tooltipNotifier = new Subject();
    return this.tooltipNotifier?.asObservable();
  }

  close(id: string): void {
    const tooltipFound = this.tooltipComponentRef.find((temp) => temp.id == id);

    const currentTooltipList = this.isTooltipOpen.value.filter(
      (f) => f.id != id
    );
    this.isTooltipOpen.next([...currentTooltipList, { isOpen: false, id }]);

    if (tooltipFound && tooltipFound.template) {
      tooltipFound.template.destroy();
      tooltipFound.template = null;
      this.tooltipComponentRef = this.tooltipComponentRef.filter(
        (tem) => tem.id != id
      );
    }
  }

  prepareTooltipComponent(component: ComponentRef<any>, data: any) {
    component.instance._closeEvent.subscribe((value: CloseData) => {
      this.closeTooltip(value.action, value.id);
    });

    component.instance._submitEvent.subscribe((value: SubmitData) => {
      this.submitTooltip(value);
    });

    component.setInput('data', data);
  }

  private closeTooltip(action: CloseActions, id: string): void {
    const tooltipFound = this.tooltipComponentRef.find((temp) => temp.id == id);

    const a = this.isTooltipOpen.value.filter((f) => f.id != id);
    this.isTooltipOpen.next([...a, { isOpen: false, id }]);

    if (tooltipFound && tooltipFound.template) {
      tooltipFound.template.destroy();
      tooltipFound.template = null;
      this.tooltipNotifier?.next({ action, id });
      this.tooltipComponentRef = this.tooltipComponentRef.filter(
        (tem) => tem.id != id
      );
    }
  }

  private submitTooltip(value: SubmitData): void {
    this.tooltipNotifier?.next(value);
  }
}
