import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.css',
  animations: [
    trigger('miAnimation', [
      state(
        'init',
        style({
          transform: 'translate({{cantidad}}px, {{cantidad}}px)',
        }),
        { params: { cantidad: 20 } }
      ),
      state(
        'test',
        style({
          transform: 'translate({{cantidad}}px, {{cantidad}}px)',
        }),
        { params: { cantidad: 20 } }
      ),

      transition(
        'init <=> test',
        animate(
          '1s',
          keyframes([
            style({ backgroundColor: 'red', offset: 0 }),
            style({ backgroundColor: 'blue', offset: 0.2 }),
            style({ backgroundColor: 'orange', offset: 0.5 }),
            style({ backgroundColor: 'black', color: 'yellow', offset: 0.7 }),
            style({
              transform: 'translate({{cantidad}}px, {{cantidad}}px)',
              offset: 1,
            }),
          ])
        )
      ),
    ]),
  ],
})
export class Example1Component {

  cantidad = 2 * 100;
  state = 'init';

  change() {
    if (this.state == 'init') {
      this.cantidad = this.cantidad * 2;
      this.state = 'test';
    } else {
      this.cantidad = this.cantidad / 2;
      this.state = 'init';
    }
  }
}
