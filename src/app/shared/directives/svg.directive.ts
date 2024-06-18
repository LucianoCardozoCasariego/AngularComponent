import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Icons } from '../../interfaces/Icons.interface';
import { mobyicon } from '../icons/MobyIcon.icon';
import { onboarding } from '../icons/onboarding.icon';
import { reportes } from '../icons/reportes.icon';
import { dashboard } from '../icons/dashboard.icon';
import { metricas } from '../icons/metricas.icon';
import { menu_arrow_left } from '../icons/menu-arrow-left.icon';
import { menu_arrow_rigth } from '../icons/menu-arrow-rigth.icon';
import { bell } from '../icons/bell.icon';
import { arrow_down } from '../icons/arrow-down';
import { search } from '../icons/search.icon';
import { trash } from '../icons/trash.icon';
import { entry_bank } from '../icons/entrybank.icon';
import { arrow_high } from '../icons/arrow-high';
import { arrow_medium } from '../icons/arrow-medium';
import { arrow_low } from '../icons/arrow-low';
import { arrow_lower } from '../icons/arrow-lower';
import { X } from '../icons/X.icon';
import { arrow_left } from '../icons/arrow-left.icons';
import { arrow_rigth } from '../icons/arrow-rigth.icon';

@Directive({
  selector: '[appSvg]',
  standalone: true,
})
export class SvgDirective implements OnInit, OnChanges {
  @Input() svgName!: string;
  @Input() set svgGlobalClass(svgClassName: string | undefined) {
    this.svgClass = svgClassName;
  }
  @Input() svgColor?: string;
  @Input() svgWidth?: string;
  @Input() svgHeight?: string;
  @Output('click') triggerAction = new EventEmitter<void>();
  @Input() svgPointer?: boolean | '';

  svgClass: string | undefined = 'default-svg';
  constructor(private elmRef: ElementRef<HTMLDivElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.generate();
  }

  ngOnInit(): void {
    this.generate();
  }

  private generate() {
    this.elmRef.nativeElement.innerHTML = this.selectSVG();

    this.elmRef.nativeElement.style.display = 'flex';
    if (this.svgPointer === '' || this.svgPointer) {
      this.elmRef.nativeElement.style.cursor = 'pointer';
    } else {
      this.elmRef.nativeElement.style.cursor = 'initial';
    }
  }

  private selectSVG() {
    let result_icon: string = '';
    const props: Icons = {
      className: this.svgClass,
      color: this.svgColor,
      width: this.svgWidth,
      height: this.svgHeight,
    };

    switch (this.svgName) {
      case 'moby':
        result_icon = mobyicon(props);
        break;
      case 'menu_arrow_left':
        result_icon = menu_arrow_left(props);
        break;
      case 'menu_arrow_rigth':
        result_icon = menu_arrow_rigth(props);
        break;
      case 'onboarding':
        result_icon = onboarding(props);
        break;
      case 'reportes':
        result_icon = reportes(props);
        break;
      case 'dashboard':
        result_icon = dashboard(props);
        break;
      case 'metricas':
        result_icon = metricas(props);
        break;
      case 'bell':
        result_icon = bell(props);
        break;
      case 'arrow_down':
        result_icon = arrow_down(props);
        break;
      case 'search':
        result_icon = search(props);
        break;
      case 'trash':
        result_icon = trash(props);
        break;
      case 'entry_bank':
        result_icon = entry_bank(props);
        break;
      case 'arrow_high':
        result_icon = arrow_high(props);
        break;
      case 'arrow_medium':
        result_icon = arrow_medium(props);
        break;
      case 'arrow_low':
        result_icon = arrow_low(props);
        break;
      case 'arrow_lower':
        result_icon = arrow_lower(props);
        break;
      case 'arrow_left':
        result_icon = arrow_left(props);
        break;
      case 'arrow_rigth':
        result_icon = arrow_rigth(props);
        break;
      case 'x':
        result_icon = X(props);
        break;

      default:
        result_icon = mobyicon(props);
        break;
    }
    return result_icon;
  }
}
