import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() disable: boolean = false;
  @Input() borderer: boolean = false;

  @Input() color: 'Primary' | 'Danger' | 'Warn' | 'Success' = 'Primary';
}
