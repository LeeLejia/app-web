import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import {config} from '../../config/config';
import utils from '../../utils/utils';

@Injectable()
export class HttpService {
    constructor(private http: Http, private authenticationService: AuthenticationService, private router: Router) { }

  get(url) {
      return this.http.get(url).map(response => {
          const ret = response.json();
          if (ret.codes === config.codes.AuthenticationFail) {
            // todo 弹框提醒
            this.router.navigate([config.urls.login]);
          }
          return ret;
      });
  }

  post(url: string, params: any) {
    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(url, utils.parseParam({
      ...params,
      osType: 'web',
    }), header).map(response => {
      const ret = response.json();
      if (ret.codes === config.codes.AuthenticationFail) {
        // todo 弹框提醒
        this.router.navigate([config.urls.login]);
        // const user = this.authenticationService.getUser();
        // if (user) {
        // } else {
        // }
      }
      return ret;
    });
  }
}
