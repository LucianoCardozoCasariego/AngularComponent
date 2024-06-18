import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent implements AfterViewInit {
  @ViewChild('display') display!: ElementRef<HTMLDivElement>;
  @ViewChild('select') select!: ElementRef<HTMLDivElement>;

  @Output() selectedOption = new EventEmitter<SelectOption | null>();

  @Input('options') items!: SelectOption[];
  @Input('placeholder') placeholder: string = '';
  @Input('closeAtSelect') closeAtSelect: boolean = false;
  @Input('selectStyles') selectStyles?: SelectStyles;
  @Input('cleanOption') cleanOption?: string;

  isOpen = signal(false);
  hasScrool: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.hasScrool = this.setHasScrool();
    }, 0);

    this.setPlaceHolder();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (
      this.isOpen() &&
      !this.select.nativeElement.contains(event.target as Node)
    ) {
      this.toogleOptions();
    }
  }

  toogleOptions() {
    this.isOpen.update((v) => !v);
  }

  selectItem(option: SelectOption) {
    this.display.nativeElement.style.color = '#eee';
    this.display.nativeElement.innerText = option.title;
    this.selectedOption.emit(option);

    this.closeAtSelect && this.toogleOptions();
  }

  setHasScrool() {
    const stimateHeigth =
      (this.items.length + (this.cleanOption ? 1 : 0)) *
      (19 + Number(this.selectStyles?.optionPading?.split('px')[0] ?? 10));

    return (
      stimateHeigth >
      (this.selectStyles?.maxHeight ? this.selectStyles.maxHeight : 200)
    );
  }

  cleanSelectedOption() {
    this.setPlaceHolder();
    this.closeAtSelect && this.toogleOptions();
    this.selectedOption.emit(null);
  }

  private setPlaceHolder() {
    this.display.nativeElement.style.color = '#989EA6';
    this.display.nativeElement.innerText = this.placeholder;
  }

  get optionStyles() {
    return {
      padding: this.selectStyles?.optionPading,
    };
  }

  get selectElementStyles() {
    return {
      width: this.selectStyles?.selectWidth
        ? this.selectStyles?.selectWidth + 'px'
        : '200px',
    };
  }

  get displayStyles() {
    return {
      height: this.selectStyles?.displayHeight + 'px',
    };
  }
  get optionListStyles() {
    return {
      'max-height': this.selectStyles?.maxHeight + 'px',
    };
  }
}

export type SelectOption = {
  title: string;
  value: any;
};

export interface SelectStyles {
  centerOptions?: boolean;

  optionPading?: string;

  selectWidth?: number;
  displayHeight?: number;
  maxHeight?: number; //para el scrollBar
}
