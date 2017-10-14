import {Component} from '@angular/core';

@Component({
  selector: 'app-container',
  template: '<app-alert></app-alert><app-modal-dialog></app-modal-dialog><router-outlet></router-outlet>',
})
export class ContainerComponent { }
