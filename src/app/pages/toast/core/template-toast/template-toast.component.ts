import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval, take, timer } from 'rxjs';
import { toastOpenCloseAnimation } from './template-toast.animations';
import {
  ITimeBar,
  StyleType,
  ToastPosition,
  ToastService,
} from '../service/toast.service';
import { ToastTemplateConection } from '../toast-conector/templateConection';

@Component({
  selector: 'app-template-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-toast.component.html',
  styleUrl: './template-toast.component.css',
  animations: [toastOpenCloseAnimation],
})
export class TemplateToastComponent
  extends ToastTemplateConection
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild('parentContainer', { read: ViewContainerRef, static: true })
  parentContainer!: ViewContainerRef; // Donde se va a renderizar el componente con contenidos
  contenModalType!: Type<any>; // el TYPE Toast con el contenido
  contenModalComponent!: ComponentRef<any>; // el Componente de toast con el contenido creado a partir sel type

  subscription?: Subscription;

  animationData = signal({
    value: 'start',
    params: {
      distRight: '20px',
      distTop: '20px',
      distBottom: '20px',
      distLeft: '20px',
      keyframeTime: 100,
      openAnimationTime: 100,
    },
  });

  @Input() toastPosition?: ToastPosition = 'RIGTH-BOTTOM';
  @Input() openAnimationTime?: number = 100;
  @Input() toastMargin?: number = 20;
  @Input() openAnimation?: boolean = true;
  @Input() emptyToast?: boolean = false;
  @Input() closeAtClick?: boolean = true;
  @Input() styleType?: StyleType = 'SUCCES';
  @Input() timerBar?: ITimeBar = {
    showTimeBar: true,
    seconds: 5,
  };
  timerbar: string = '100%';

  constructor(private toastService: ToastService) {
    super();
  }
  ngAfterViewInit(): void {
    this.setAnimationPositions('open', '');
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.setAnimationPositions('start', '-');
    this.initChildComponent();
    !this.emptyToast && this.initTimerBar();
  }

  onMouseEnter() {
    this.subscription?.unsubscribe();
  }

  onMouseLeave() {
    this.startTimerBar();
  }

  closeToast() {
    if (this.closeAtClick) {
      this.setAnimationPositions('close', '');
      this.closeToastInTimeOut();
    }
  }

  startTimerBar(): void {
    const seconds = this.timerBar!.seconds;
    const extraTime = 1;
    const getTimeNumber = Number(this.timerbar.split('%')[0]);
    if (getTimeNumber <= 0) {
      this.setAnimationPositions('close', '');
      this.closeToastInTimeOut();
      return;
    }
    this.subscription = interval(10)
      .pipe(take((getTimeNumber + extraTime) * seconds))
      .subscribe({
        next: (value) => {
          this.timerbar = getTimeNumber - value / seconds + '%';
        },
        complete: () => {
          this.setAnimationPositions('close', '');
          this.closeToastInTimeOut();
        },
      });
  }

  private setAnimationPositions(state: string, before: string = '') {
    switch (this.toastPosition) {
      case 'RIGTH-TOP':
        this.animationData.update((a) => ({
          value: state,
          params: {
            ...a.params,
            distTop: before + this.toastMargin! + 'px',
            distRight: this.toastMargin! + 'px',
            distBottom: 'auto',
            distLeft: 'auto',
            openAnimationTime: this.openAnimationTime!,
          },
        }));
        break;
      case 'RIGTH-BOTTOM':
        this.animationData.update((a) => ({
          value: state,
          params: {
            ...a.params,
            distRight: this.toastMargin! + 'px',
            distBottom: before + this.toastMargin! + 'px',
            distTop: 'auto',
            distLeft: 'auto',
            openAnimationTime: this.openAnimationTime!,
          },
        }));
        break;
      case 'LEFT-TOP':
        this.animationData.update((a) => ({
          value: state,
          params: {
            ...a.params,
            distTop: before + this.toastMargin! + 'px',
            distLeft: this.toastMargin! + 'px',
            distBottom: 'auto',
            distRight: 'auto',
            openAnimationTime: this.openAnimationTime!,
          },
        }));
        break;
      case 'LEFT-BOTTOM':
        this.animationData.update((a) => ({
          value: state,
          params: {
            ...a.params,
            distLeft: this.toastMargin! + 'px',
            distBottom: before + this.toastMargin! + 'px',
            distTop: 'auto',
            distRight: 'auto',
            openAnimationTime: this.openAnimationTime!,
          },
        }));
        break;
      default:
        break;
    }
  }

  private closeToastInTimeOut() {
    this.animationData.update((a) => ({ ...a, state: 'close' }));
    timer(this.animationData().params.keyframeTime)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.close('[CLOSE TOAST]');
        },
      });
  }

  private initChildComponent() {
    this.contenModalComponent = this.parentContainer.createComponent(
      this.contenModalType
    );
    this.toastService.prepareFinalModalDataAndEvents(
      this.contenModalComponent,
      this.data
    );
  }

  private initTimerBar() {
    if (this.timerBar?.showTimeBar) {
      this.startTimerBar();
    }
  }
}
