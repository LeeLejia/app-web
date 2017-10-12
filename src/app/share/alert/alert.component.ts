import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MeditorService} from '../../services/meditor.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnDestroy {

  // 0是通知框
  alert_type = 0;
  title = '';
  content = '';
  hidden= true;
  cancelEvn: Function = null;
  confirmEvn: Function = null;
  closeEvn: Function = null;
  outsideEvn: Function = null;
  temp = '';

  subscription: Subscription = null;
  constructor(private meditor: MeditorService) {
    this.subscription = meditor.getObservable().subscribe(news => {
      if (news.id === 'alert') {
        this.alert_type = news.body.type || 0;
        this.title = news.body.title || '提示';
        this.content = news.body.content || '确定操作？';
        this.cancelEvn = news.body.cancelEvn || null;
        this.confirmEvn = news.body.confirmEvn || null;
        this.closeEvn = news.body.closeEvn || null;
        this.temp = news.body.temp || '';
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
