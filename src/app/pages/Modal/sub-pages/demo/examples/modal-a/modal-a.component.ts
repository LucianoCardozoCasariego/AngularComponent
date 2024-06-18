import { Component } from '@angular/core';
import { TemplateConection } from '../../../../core/modal-conector/templateConection';

@Component({
  selector: 'app-modal-a',
  standalone: true,
  imports: [],
  templateUrl: './modal-a.component.html',
  styleUrl: './modal-a.component.css',
})
export class ModalAComponent extends TemplateConection {}
