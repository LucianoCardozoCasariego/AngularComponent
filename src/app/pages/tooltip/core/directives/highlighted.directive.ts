import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TooltipService } from '../service/tooltip.service';

@Directive({
  selector: '[appHighLight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input() tooltipIDs: string[] = [];

  constructor(
    private elmRef: ElementRef<HTMLElement>,
    private tooltipService: TooltipService
  ) {}

  ngOnInit(): void {
    this.listenTooltipOpen();
  }

  private listenTooltipOpen() {
    this.tooltipService.isTooltipOpen
      .pipe(
        map((a) => {
          return (
            a.some((b) => this.tooltipIDs.includes(b.id!) && b.isOpen) && a
          );
        })
      )
      .subscribe({
        next: (value) => {
          if (value) {
            this.elmRef.nativeElement.style.zIndex = '999';
          } else {
            this.elmRef.nativeElement.style.zIndex = 'inherit';
          }
        },
      });
  }
}
