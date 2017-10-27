import {Component} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from "@angular/router";
import {config} from "../../../../config/config";

@Component({
    selector: 'app-side-navigation',
    styleUrls: ['side-navigation.css'],
    templateUrl: 'side-navigation.html',
  })
export class SideNavigationComponent {

  user: any = null;
  navs = config.roles.developer.nav;
  constructor(private auth: AuthenticationService, private router: Router) {
    this.user = auth.getUser();
    console.log(this.navs);
  }
}
