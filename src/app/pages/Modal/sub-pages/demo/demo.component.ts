import { Component } from '@angular/core';
import { ModalAComponent } from './examples/modal-a/modal-a.component';
import { DeleteOportunitiesModalComponent } from './examples/delete-oportunities-modal/delete-oportunities-modal.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ModalsService } from '../../core/service/modals.service';

@Component({
  selector: 'app-trainee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  cantForm: FormControl = new FormControl(99);
  constructor(private modalService: ModalsService) {}

  openModalA() {
    this.modalService.open(ModalAComponent);
  }

  openModalDelete() {
    if (this.cantForm.value == null) {
      this.cantForm.setValue(0);
    }
    this.modalService
      .open(DeleteOportunitiesModalComponent, {
        data: { cant: this.cantForm.value },
      })
      .subscribe({
        next: (val) => {
          console.log(val);
        },
      });
  }

  openModalB() {
    this.modalService.open(ModalAComponent, { canCloseByBackground: false });
  }

  openModalC() {
    this.modalService.open(ModalAComponent, { disableXicon: true });
  }

  openModalD() {
    this.modalService.open(ModalAComponent, {
      title: { content: 'Modal vacio' },
    });
  }
}
