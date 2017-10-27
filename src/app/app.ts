import {Component} from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
  <router-outlet></router-outlet>
  <app-alert></app-alert>
  <app-modal-dialog></app-modal-dialog>
  `,
})
export class ContainerComponent { }
