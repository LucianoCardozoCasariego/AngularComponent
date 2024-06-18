import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastTemplateConection } from '../../../../core/toast-conector/templateConection';

@Component({
  selector: 'app-test-toas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-toas.component.html',
  styleUrl: './test-toas.component.css',
})
export class TestToasComponent
  extends ToastTemplateConection
  implements OnInit, OnDestroy
{
  cant!: number;
  text = {
    '=1': 'Se ha eliminado correctamente 1 oportunidad',
    other: 'Se han eliminado correctamente # oportunidades',
  };
  ngOnDestroy(): void {
    console.log('se destruye');
  }

  ngOnInit(): void {
    if (!this.data?.cant) {
      console.error("Campo requerido: 'Cant' en TestToasComponent");
      return;
    }

    this.cant = this.data.cant;
  }
}
