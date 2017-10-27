import {Component} from '@angular/core';
import {config} from '../../config/config';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class RegisterComponent {
  loginUrl = config.api.login;
  siteName = config.proName;
  email = '';
  phone = '';
  password = '';
  verifyCode = '';
  constructor() {
  }
}

