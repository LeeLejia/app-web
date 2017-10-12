
import {
  Component, ComponentDecorator, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {config} from '../../config/config';
import {MeditorService} from '../services/meditor.service';
import {AlertComponent} from '../share/alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('container2', {read: ViewContainerRef}) viewContainer;
  @ViewChild('alertContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  forgetPwd = config.urls.forgetPwd;
  register = config.urls.register;
  constructor(private meditor: MeditorService) {
  }
  taggle() {
    this.meditor.push({
      id: 'alert',
      body: {
        title: '温馨提示！',
        content: '测试内容！！',
        cancelEvn: function() {
          alert('点击了取消！'); },
        confirmEvn: function() {
          alert('点击了确定！'); },
        closeEvn: function() {
          alert('点击了关闭！'); },
      },
    });
  }
  taggle2() {
    this.meditor.push({
      id: 'modal-dialog',
      body: {
        type: 1,
        temp: this.target,
      },
    });
  }

  ngOnDestroy() {
    this.componentRef.destroy()
  }
}
