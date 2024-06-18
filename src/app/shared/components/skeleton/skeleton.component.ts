import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oportunity-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css',
})
export class OportunitySkeletonComponent implements OnInit {
  @Input() times?: number = 1;
  itemsDelay: number[] = [];

  ngOnInit(): void {
    this.setArrayofDelays();
  }

  setArrayofDelays() {
    let result: number[] = [];
    const cicles = this.times || 1;

    for (let index = 0; index < cicles; index++) {
      const randomNumber = Math.random() * 5;
      const roundedNumber = Math.round(randomNumber * 2) / 2;

      result.push(roundedNumber);
    }
    this.itemsDelay = result;
  }
}
