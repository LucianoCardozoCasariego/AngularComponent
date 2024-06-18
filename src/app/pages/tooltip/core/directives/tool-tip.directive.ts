import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { TooltipService } from '../service/tooltip.service';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[appToolTip]',
  standalone: true,
})
export class ToolTipDirective implements OnInit, OnDestroy {
  @Input() tooltipID!: string;

  @Output() onHover: EventEmitter<boolean> = new EventEmitter();
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  private subscription = new Subscription();

  constructor(
    private elmRef: ElementRef<HTMLElement>,
    private tooltipService: TooltipService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    const element = this.elmRef.nativeElement;

    this.subscription.add(
      fromEvent(window, 'resize').subscribe(() => {
        this.sendTargetElement(element);
      })
    );
    this.subscription.add(
      this.tooltipService.updatePosition.subscribe({
        next: () => {
          console.log('asd');
          this.sendTargetElement(element);
        },
      })
    );

    this.sendTargetElement(element);
    this.setOnHoverFunction(element);
    this.setOnClickFunction(element);
    this.listenTooltipOpen();
  }

  private sendTargetElement(element: HTMLElement) {
    const position = element.getBoundingClientRect();

    const a = this.tooltipService.elementDirectiveDataList.value.filter(
      (elem) => elem.id != this.tooltipID
    );
    const nextValue = [
      ...a,
      {
        id: this.tooltipID,
        position,
        element: element,
      },
    ];
    this.tooltipService.elementDirectiveDataList.next(nextValue);
  }

  private setOnHoverFunction(element: HTMLElement) {
    element.addEventListener('mouseenter', () => {
      this.onHover.emit(true);
    });
    element.addEventListener('mouseleave', () => {
      this.onHover.emit(false);
    });
  }

  private setOnClickFunction(element: HTMLElement) {
    element.addEventListener('click', () => {
      const a = this.tooltipService.isTooltipOpen.value.find(
        (b) => b.id == this.tooltipID
      )?.isOpen;

      this.onClick.emit(!a);
    });
  }

  private listenTooltipOpen() {
    this.tooltipService.isTooltipOpen.subscribe({
      next: (value) => {
        const tooltip = value.find((v) => v.id == this.tooltipID);

        const targetElement =
          this.tooltipService.elementDirectiveDataList.value.find(
            (v) => v.id == tooltip?.id
          );

        if (tooltip?.isOpen) {
          targetElement?.element &&
            (targetElement.element.style.zIndex = '999999');
        } else {
          targetElement?.element &&
            (targetElement.element.style.zIndex = 'initial');
        }
      },
    });
  }
}
