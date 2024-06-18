import {
  Component,
  ComponentRef,
  Input,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateConection } from '../modal-conector/templateConection';
import { ModalsService } from '../service/modals.service';
import { SvgDirective } from '../../../../shared/directives/svg.directive';

@Component({
  selector: 'app-template-modal',
  standalone: true,
  imports: [SvgDirective, CommonModule],
  templateUrl: './template-modal.component.html',
  styleUrl: './template-modal.component.css',
})
export class TemplateModalComponent
  extends TemplateConection
  implements OnInit
{
  @ViewChild('parentContainer', { read: ViewContainerRef, static: true })
  parentContainer!: ViewContainerRef;
  contenModalType!: Type<any>;
  contenModalComponent!: ComponentRef<any>;

  @Input() canCloseByBackground?: boolean = true;
  @Input() disableXicon?: boolean = false;
  @Input() title?: { content: string; leftSpace: number };

  constructor(private modalService: ModalsService) {
    super();
  }

  ngOnInit(): void {
    this.contenModalComponent = this.parentContainer.createComponent(
      this.contenModalType
    );
    this.modalService.prepareFinalModalDataAndEvents(
      this.contenModalComponent,
      this.data
    );
  }

  get isXiconDisable(): boolean {
    return !this.disableXicon;
  }

  closeByBackground() {
    if (this.canCloseByBackground) {
      this.closeEvent.next();
    }
  }
}
