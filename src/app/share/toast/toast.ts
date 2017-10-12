import {Component} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MeditorService} from '../../services/meditor.service';

@Component({
  templateUrl: './toast.html',
  styleUrls: ['./toast.css'],
})
export class ToastComponent {
  subscription: Subscription = null;
  state: ToastMsg;
  constructor(private meditor: MeditorService) {
    this.subscription = meditor.getObservable().subscribe(msg => {
      if (msg.id === 'toast') {
        this.state = msg.body as ToastMsg;
        this.state.hidden = false;
      }
    });
  }
}
export interface ToastMsg {
  hidden: boolean;
  msg: string;
  type: 'warn'| 'info'| 'error';
  durtion: 'short'| 'long'| 'never';
}
