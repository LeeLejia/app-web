import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import utils from '../../utils/utils';
import {config} from '../../config/config';
import {MeditorService} from './meditor.service';
import {AlertMsg} from '../share/alert/alert.component';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private router: Router, private meditor: MeditorService) { }
    user: null;
    /**
     * 获取登录用户信息
     */
    getUser() {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

    /**
     * 登录
     * @param params
     */
    login(params) {
        const headers = new Headers();
        console.log(`${utils.getApiPrefix()}/${config.urls.login}`);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(`${utils.getApiPrefix()}${config.urls.login}`, utils.parseParam({
            ...params,
            osType: 'web'
        }), {
                headers
            })
            .map(response => {
                const ret = response.json();
                if (ret.codes === 200) {
                  localStorage.setItem('token', ret.data.token);
                  localStorage.setItem('session', ret.data.session);
                  localStorage.setItem('user', JSON.stringify(ret.data.user));
                  this.user = ret.data.user || {};
                  // todo 返回跳转前页面
                  if (ret.data.user.role === config.roles.developer.name) {
                      this.router.navigate([config.roles.developer.home]);
                  }else if (ret.data.user.role === config.roles.admin.name) {
                      this.router.navigate([config.roles.admin.home]);
                  }else {
                    this.router.navigate([config.roles.common.home]);
                  }
                }else {
                  const msg: AlertMsg = {title: '登录失败', content: ret.data.msg || '请检查网络是否连接？'};
                  this.meditor.push({id: 'alert', body: msg});
                }
                return ret;
            });
    }
    /**
     * 注销帐号
     */
    logout() {
        const user = this.getUser();
        if (user) {
            const url = `${utils.getApiPrefix()}${config.urls.logout}`;
            return this.http.post(url, utils.parseParam({
              session: localStorage.getItem('session'),
              token: localStorage.getItem('token'),
              osType: 'web',
            })).subscribe(response => {});
        }
      this.router.navigate([config.urls.login]);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('session');
    }
}
