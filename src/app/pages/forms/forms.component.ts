import { Component } from '@angular/core';
import {
  SubPagesNavBar,
  SubPagesRoute,
} from '../../shared/components/sup-pages-nav-bar/sub-pages-nav-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [RouterModule, SubPagesNavBar],
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  routes: SubPagesRoute[] = [
    { title: 'Buttons', url: 'buttons' },
    { title: 'Select', url: 'selects' },
    { title: 'Inputs WIP', url: 'inputs' },
  ];
}
