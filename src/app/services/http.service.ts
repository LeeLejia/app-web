import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import {config} from '../../config/config';
import utils from '../../utils/utils';
import {MeditorService} from "./meditor.service";
import {AlertMsg} from "../share/alert/alert.component";

@Injectable()
export class HttpService {
  constructor(private http: Http, private authenticationService: AuthenticationService,
              private router: Router, private meditor: MeditorService) { }
  get(url, params?: any) {
      const requrl = params ? url + `?${utils.parseParam(params)}` : url;
      return this.http.get(requrl).map(response => {
          const ret = response.json();
          if (ret.codes === config.codes.AuthenticationFail) {
            const msg: AlertMsg = {title: '身份验证失败', content: ret.data.msg || '请检查网络是否连接？'};
            this.meditor.push({id: 'alert', body: msg});
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
        const msg: AlertMsg = {title: '身份验证失败', content: ret.data.msg || '请检查网络是否连接？'};
        this.meditor.push({id: 'alert', body: msg});
        this.router.navigate([config.urls.login]);
      }
      return ret;
    });
  }
}
