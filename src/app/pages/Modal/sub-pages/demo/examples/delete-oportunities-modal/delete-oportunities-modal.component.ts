import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDirective } from '../../../../../../shared/directives/svg.directive';
import { TemplateConection } from '../../../../core/modal-conector/templateConection';
import { ButtonComponent } from '../../../../../forms/components/button/button.component';

@Component({
  selector: 'app-delete-oportunities-modal',
  standalone: true,
  imports: [CommonModule, SvgDirective, ButtonComponent],
  templateUrl: './delete-oportunities-modal.component.html',
  styleUrl: './delete-oportunities-modal.component.css',
})
export class DeleteOportunitiesModalComponent
  extends TemplateConection
  implements OnInit
{
  cant!: number;
  messageMapping = {
    '=1': 'la oportunidad seleccionada?',
    other: 'las # oportunidades seleccionadas?',
  };

  ngOnInit(): void {
    this.cant = this.data?.cant;

    if (this.cant == undefined) {
      console.error(
        'Este modal espera un numero de oportunities a ser eliminadas'
      );
    }
  }

  submitData() {
    this.submit({ action: '[ACEPT]' });
    this.close();
  }
}
