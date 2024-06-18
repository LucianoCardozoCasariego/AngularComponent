import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, map } from 'rxjs';
import {
  TooltipSeparation,
  ArrowPosition,
  TooltipService,
} from '../service/tooltip.service';
import { TooltipTemplateConection } from '../tolltip-conector/templateConection';

@Component({
  selector: 'app-template-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-tooltip.component.html',
  styleUrl: './template-tooltip.component.css',
})
export class TemplateTooltipComponent
  extends TooltipTemplateConection
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild('tooltip', { static: false }) tooltip?: ElementRef;
  @ViewChild('parentContainer', { read: ViewContainerRef, static: true })
  parentContainer!: ViewContainerRef; // Donde se va a renderizar el componente con contenidos
  contenModalType?: Type<any>; // el TYPE Toast con el contenido
  basicTooltipContent?: HTMLParagraphElement; // el TYPE Toast con el contenido
  contenModalComponent!: ComponentRef<any>; // el Componente de toast con el contenido creado a partir sel type

  tooltipWidth = signal(0);
  tooltitHeight = signal(0);

  subscriptions = new Subscription();

  @Input() showArrow?: boolean = true;
  @Input() blurBackground?: boolean = false;
  @Input() closeBackground?: boolean = true;
  @Input() separation: TooltipSeparation = {
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
  };
  @Input() arrowPosition?: ArrowPosition = 'BOTTOM';

  coordenates = signal({ top: '', left: '', bottom: '', right: '' });

  constructor(private tooltipservice: TooltipService) {
    super();
  }
  ngAfterViewInit(): void {
    this.tooltipWidth.set(this.tooltip!.nativeElement.offsetWidth);
    this.tooltitHeight.set(this.tooltip!.nativeElement.offsetHeight);
    this.setActionToOpenTooltip();
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.contenModalType && this.initChildComponent();
  }

  closeByBackground() {
    if (this.closeBackground) {
      this.close('[CLOSE TOOLTIP]');
    }
  }

  private setActionToOpenTooltip() {
    this.subscriptions.add(
      this.tooltipservice.elementDirectiveDataList
        .pipe(
          map((value) => {
            return value.find((v) => v.id == this.data.tooltipID)!;
          })
        )
        .subscribe({
          next: (val) => {
            this.generatePosition(val.position);
          },
        })
    );
  }

  private generatePosition(position: any) {
    switch (this.arrowPosition) {
      case 'BOTTOM':
        this.coordenates.set({
          top:
            position.top +
            25 -
            this.tooltitHeight() -
            (this.separation.top ?? 0) +
            'px',
          left:
            position.left +
            position.width / 2 -
            this.tooltipWidth() / 2 +
            (this.separation.left ?? 0) +
            'px',
          bottom: '',
          right: '',
        });
        break;
      case 'TOP':
        this.coordenates.set({
          top:
            position.top +
            position.height +
            55 +
            (this.separation.bottom ?? 0) +
            'px',
          left:
            position.left +
            position.width / 2 -
            this.tooltipWidth() / 2 +
            (this.separation.left ?? 0) +
            'px',
          bottom: '',
          right: '',
        });
        break;
      case 'LEFT':
        this.coordenates.set({
          top:
            position.top +
            position.height / 2 +
            (this.separation.top ?? 0) +
            'px',
          left:
            position.left +
            position.width +
            15 +
            (this.separation.left ?? 0) +
            'px',
          bottom: '',
          right: '',
        });
        break;
      case 'RIGHT':
        this.coordenates.set({
          top:
            position.top +
            position.height / 2 +
            (this.separation.top ?? 0) +
            'px',
          left:
            position.left -
            this.tooltipWidth() -
            15 +
            (this.separation.left ?? 0) +
            'px',
          bottom: '',
          right: '',
        });
        break;
    }
  }

  private initChildComponent() {
    this.contenModalComponent = this.parentContainer.createComponent(
      this.contenModalType!
    );
    this.tooltipservice.prepareTooltipComponent(
      this.contenModalComponent,
      this.data
    );
  }
}
