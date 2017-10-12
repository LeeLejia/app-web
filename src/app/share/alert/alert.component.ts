import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MeditorService} from '../../services/meditor.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnDestroy {
  title = '';
  content = '';
  hidden= true;
  cancelEvn: Function = null;
  confirmEvn: Function = null;
  buttons: {name: string, handle: () => {}}[] = null;
  closeEvn: Function = null;
  outsideEvn: Function = null;
  temp = '';

  subscription: Subscription = null;
  constructor(private meditor: MeditorService) {
    this.subscription = meditor.getObservable().subscribe(msg => {
      if (msg.id === 'alert') {
        const news = msg.body as AlertMsg;
        this.title = news.title || '提示';
        this.content = news.content || '确定操作？';
        this.cancelEvn = news.cancelEvn || null;
        this.confirmEvn = news.confirmEvn || null;
        this.closeEvn = news.closeEvn || null;
        this.buttons = news.buttons || null;
        this.hidden = false;
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // 按取消按钮
  clickCancel() {
    if (this.cancelEvn) {
      this.cancelEvn();
    }
    this.hidden = true;
  }
  // 按确定按钮
  clickConfirm() {
    if (this.confirmEvn) {
      this.confirmEvn();
    }
    this.hidden = true;
  }
  // 关闭窗口
  close() {
    if (this.closeEvn) {
      this.closeEvn();
    }
    this.hidden = true;
  }
  // 点击了非内容区
  click_outside() {
    if (this.outsideEvn) {
      this.outsideEvn();
    }else {
      this.hidden = true;
    }
  }
}
export interface AlertMsg {
  hidden: boolean;
  title: string;
  content: string;
  cancelEvn: () => {};
  confirmEvn: () => {};
  closeEvn: () => {};
  buttons: {name: string, handle: () => {}}[];
}

