
import {
  Component, ComponentDecorator, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {config} from '../../config/config';
import {MeditorService} from '../services/meditor.service';
import {TestComponent} from '../test/test.component';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  forgetPwd = config.urls.forgetPwd;
  register = config.urls.register;
  account = '';
  password = '';
  constructor(private meditor: MeditorService, private auth: AuthenticationService) {
  }
  login() {
    this.auth.login({
      account: this.account,
      password: this.password,
    }).subscribe(res => {});
  }

  taggle() {
    this.meditor.push({
      id: 'alert',
      body: {
        title: '温馨提示！',
        content: '测试内容！！',
        cancelEvn: () => {
          alert('点击了取消！'); },
        confirmEvn: () => {
          alert('点击了确定！'); },
        closeEvn: () => {
          alert('点击了关闭！'); },
        buttons: [
          {name: 'a button', handle: () => {alert('按了A按钮！'); }},
          {name: 'b button', handle: () => {alert('按了B按钮！'); }},
        ],
      },
    });
  }
  taggle2() {
    this.meditor.push({
      id: 'modal-dialog',
      body: {
        view: TestComponent,
      },
    });
  }
}
