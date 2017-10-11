import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import utils from '../../utils/utils';
import {config} from "../../config/config";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private router: Router) { }
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
        console.log(`${utils.getApiPrefix()}${config.urls.login}`);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(`${utils.getApiPrefix()}/login`, utils.parseParam({
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
                }
                return ret;
            });
    }
    /**
     * 注销
     */
    logout() {
        const user = this.getUser();
        if (user) {
            const url = `${utils.getApiPrefix()}/${config.urls.logout}?${utils.parseParam({
                account: user.account,
                osType: 'web',
                roleType: user.userType || 'member',
                token: localStorage.getItem('currentUser')
            })}`;
            return this.http.get(url).subscribe(response => {
                localStorage.setItem('currentUser', '');
                localStorage.setItem('userInfo', '');
                if (user.userType === 'super' || user.userType === 'admin' ) {
                    this.router.navigate(['/login']);
                }
                if (user.userType === 'member' || user.userType === 'employee' || !user.userType) {
                    this.router.navigate(['/orglogin']);
                }
            });

        } else {
            this.router.navigate([config.urls.login]);
        }
    }
}
