import {Component} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
    selector: 'app-side-navigation',
    styleUrls: ['side-navigation.css'],
    templateUrl: 'side-navigation.html',
  })
export class SideNavigationComponent {

  user: any = null;
  constructor(private auth: AuthenticationService) {
    this.user = auth.getUser();
  }
}
