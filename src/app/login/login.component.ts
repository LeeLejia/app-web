
import {Component} from '@angular/core';
import {config} from '../../config/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  forgetPwd = config.urls.forgetPwd;
  register = config.urls.register;

}
