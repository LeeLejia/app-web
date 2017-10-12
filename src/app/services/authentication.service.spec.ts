/**
 * Created by ASUS on 2017/8/15.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {} from 'jasmine';

describe('AuthenticationService', () => {

  // 模拟路由stub
  class RouterStub {
    navigate(param: any[]): void{
    }
  }

  // 开始环境
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AuthenticationService,
        { provide: XHRBackend, useClass: MockBackend },
        {provide: Router, useClass: RouterStub},
      ]
    });
  });

  /*
   * 平台管理员登录成功
   * @param 登录信息 User
   * @result 反馈
   */
  describe('Login()', () => {
    it('Login Normal',
      inject([AuthenticationService, XHRBackend], (authenticationService, mockBackend) => {
        const ret: any = {
          "codes": 200,
          'msg': 'SUCCESS',
          'data': {
            'token': '4624a69f389820e039d48fa0a904fcd9',
            'user': [
              {
                'id': 2,
                'username': 'test',
                'userNo': '',
                'userLevel': '',
                'account': '11111111112',
                'pwd': '2b9cdebb444dbb2fe8380860104f0573',
                'type': '0',
                'state': 1,
                'userType': 'super',
                'updatedAt': '2017-07-16T00:00:00Z',
                'createdAt': '2017-07-16T00:00:00Z'
              }
            ]
          }
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(ret)
          })));
        });

        authenticationService.login('13538842294', 'pwdabc').subscribe(
          ret => {
            expect(ret.codes).toEqual(200);
          },
          error => {

          }
        );
      }));

  /*
  * 机构管理员登录成功
  * @param 登录信息 User
  * @result 反馈
   */
  describe('Login()', () => {
    it('Login Normal',
      inject([AuthenticationService, XHRBackend], (authenticationService, mockBackend) => {
        const ret: any = {
          "codes": 200,
          'msg': 'SUCCESS',
          'data': {
            'token': '4624a69f389820e039d48fa0a904fcd9',
            'user': [
              {
                'id': 2,
                'username': 'test',
                'userNo': '',
                'userLevel': '',
                'account': '11111111112',
                'pwd': '2b9cdebb444dbb2fe8380860104f0573',
                'type': '0',
                'state': 1,
                'userType': 'admin',
                'updatedAt': '2017-07-16T00:00:00Z',
                'createdAt': '2017-07-16T00:00:00Z'
              }
            ]
          }
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(ret)
          })));
        });

        authenticationService.login('13538842294', 'pwdabc').subscribe(
          ret => {
            expect(ret.codes).toEqual(200);
          },
          error => {

          }
        );
      }));

    /*
     * 登录失败
     * @param 登录信息 User
     * @result 反馈
     */
    it('Login Fail',
      inject([AuthenticationService, XHRBackend], (authenticationService, mockBackend) => {
        const ret: any = {
          "codes": 205,
          'msg': 'FAIL',
          'data': {
            'token': '4624a69f389820e039d48fa0a904fcd9',
            'user': [
              {
                'id': 2,
                'username': 'test',
                'userNo': '',
                'userLevel': '',
                'account': '11111111112',
                'pwd': '2b9cdebb444dbb2fe8380860104f0573',
                'type': '0',
                'state': 1,
                'userType': 'admin',
                'updatedAt': '2017-07-16T00:00:00Z',
                'createdAt': '2017-07-16T00:00:00Z'
              }
            ]
          }
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(ret)
          })));
        });

        authenticationService.login('13538842294', 'pwdabc').subscribe(
          ret => {
            expect(ret.codes).toEqual(205);
          },
          error => {

          }
        );
      }));

    const user: any =  {
      'id': 2,
      'username': 'test',
      'userNo': '',
      'userLevel': '',
      'account': '11111111112',
      'pwd': '2b9cdebb444dbb2fe8380860104f0573',
      'type': '0',
      'state': 1,
      'userType': 'admin',
      'updatedAt': '2017-07-16T00:00:00Z',
      'createdAt': '2017-07-16T00:00:00Z'
    };

    /*
     * 用户已登录,登出
     * @param 用户已登录状态
     * @result 反馈
     */
    it('Logout Normal',
      inject([AuthenticationService, XHRBackend], (authenticationService, mockBackend) => {

        localStorage.setItem('userInfo', JSON.stringify(user));

        authenticationService.logout();
      }));

    /*
     * 用户未登录,登出
     * @param
     * @result 反馈
     */
    it('logout Fail',
      inject([AuthenticationService, XHRBackend], (authenticationService, mockBackend) => {
        authenticationService.logout();
      }));


    /*
     * 用户未登录,获取用户信息
     * @param
     * @result 反馈
     */
    it('getUser null',
      inject([AuthenticationService, XHRBackend], (authenticationService, mockBackend) => {

        localStorage.setItem('userInfo', null);

        authenticationService.getUser();
      }));

  });
  });
});
