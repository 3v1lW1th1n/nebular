import { Component } from '@angular/core';


@Component({
  selector: 'nb-context-menu-modes',
  templateUrl: './context-menu-modes.component.html',
  styles: [`
    :host nb-layout-column {
      height: 50vw;
    }

    button {
      margin-right: 1rem;
    }
  `],
})
export class ContextMenuModesComponent {
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
}
