import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sub-pages-nav-bar.component.html',
  styleUrl: './sub-pages-nav-bar.component.css',
})
export class SubPagesNavBar {
  @Input('routes') routes!: SubPagesRoute[];
}

export interface SubPagesRoute {
  title: string;
  url: string;
}
