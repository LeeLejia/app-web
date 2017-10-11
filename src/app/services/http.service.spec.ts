import { HttpService } from './http.service';
import { AlertService } from './../_services/alert.service';
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend,
    BaseRequestOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { UserService } from "../_services/index";
import { Router } from "@angular/router";
import { } from 'jasmine'
import { AuthenticationService } from "../_services/authentication.service";
import { OrganizationService } from "../_services/organization.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

describe('Http.service', () => {
    let httpservice:   HttpService

    class Body {  //提供json方法;
        code: number = 403;
        msg: string = 'SUCCESS';
        data: any = ''
        json(): any {
            return {
               "code":this.code,
               "msg":this.msg,
               "data":  this.data
              }
        }
    }

    let user: any = {
        "id": 2,
        "username": "test",
        "userNo": "",
        "userType": "super",
        "account": "11111111112",
        "pwd": "2b9cdebb444dbb2fe8380860104f0573",
        "type": "0",
        "state": 1,
        "updatedAt": "2017-07-16T00:00:00Z",
        "createdAt": "2017-07-16T00:00:00Z"
    }
    localStorage.setItem('userInfo', JSON.stringify(user));

    let mockbody = new Body();
    function mockBackendFunc (testbed: TestBed) {
        console.log('模拟后端...');
        let mockbackend: MockBackend = testbed.get(MockBackend);
        mockbackend.connections.subscribe(
            (connection: MockConnection) => {
                let mockdata =  {
                              employees: [{
                                  "id": 1,
                                  "name": "test",
                                  "ownerId": 3,
                                  "ownerName": "123",
                                  "updatedAt": "2017-08-04T12:39:50Z",
                                  "createdAt": "2017-08-04T12:39:46Z",
                                  "workGroupNew":{
                                    "id": 1,
                                }}],
                               total: 11
                            };
                mockbody.data = mockdata;
                connection.mockRespond(new Response(
                new ResponseOptions({
                  body: mockbody
                })
                ));
            }
        )
    }

    class RouterStub {
        navigate(param: any[]): void {
        }
    }

    class AuthenticationServiceStub {
    getUser() {
      let user = localStorage.getItem('userInfo');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
  }

    beforeEach(() => {
        TestBed.configureTestingModule({
            //declarations:[HttpService],
            providers: [  HttpService,
                         //{ provide:AuthenticationService, useClass:AuthenticationServiceStub},
                         AuthenticationService,
                         { provide: Router, useClass: RouterStub },
                         { provide: XHRBackend, useClass: MockBackend },
                         MockBackend,         //模拟http请求的后端, 为http请求默认值
                        BaseRequestOptions,
                        {
                        provide: Http,
                        deps: [
                            MockBackend,
                            BaseRequestOptions
                        ],
                        useFactory: (backend: XHRBackend, defaultOption: BaseRequestOptions) => {
                            return new Http(backend, defaultOption);
                        }
                        }
                        ],
            imports: [HttpModule]
        })

    })

    /**
     * @param url
     * @param user !== null;
     * @return res.code === 403
     */
    it('getAuth',
        inject([HttpService, XHRBackend], (httpservice, mockBackend) => {
            localStorage.setItem('userInfo', JSON.stringify(user));
            let testBed = getTestBed();
            mockBackendFunc(testBed);
            httpservice.get().subscribe(res => expect(res.codes).toEqual(403));
        }));

    /**
     * @param url
     * @param user.userType === admin;
     * @return res.code === 403
     */
    it('getAuth',
        inject([HttpService, XHRBackend], (httpservice, mockBackend) => {
            user.userType = 'admin';
            localStorage.setItem('userInfo', JSON.stringify(user));
            let testBed = getTestBed();
            mockBackendFunc(testBed);
            httpservice.get().subscribe(res => expect(res.codes).toEqual(403));
        }));

    /**
     * @param url
     * @param user.userType === member;
     * @return res.code === 403
     */
    it('getAuth',
        inject([HttpService, XHRBackend], (httpservice, mockBackend) => {
            user.userType = 'member';
            localStorage.setItem('userInfo', JSON.stringify(user));
            let testBed = getTestBed();
            mockBackendFunc(testBed);
            httpservice.get().subscribe(res => expect(res.codes).toEqual(403));
        }));

    /**
     * @param url
     * @param user.userType === member;
     * @return res.code === 403
     */
    it('getAuth',
        inject([HttpService, XHRBackend], (httpservice, mockBackend) => {
            user.userType = 'member';
            localStorage.setItem('userInfo', JSON.stringify(user));
            let testBed = getTestBed();
            mockBackendFunc(testBed);
            httpservice.get().subscribe(res => expect(res.codes).toEqual(403));
        }));

        /**
     * @param url
     * @param user.userType === member;
     * @return res.code !== 403
     */
    it('getAuth',
        inject([HttpService, XHRBackend], (httpservice, mockBackend) => {
            user.userType = 'member';
            mockbody.code = 404;
            localStorage.setItem('userInfo', JSON.stringify(user));
            let testBed = getTestBed();
            mockBackendFunc(testBed);
            httpservice.get().subscribe(res => expect(res.codes).toEqual(404));
        }));

    /**
     * @param url
     * @param user === null;
     * @return res.code === 403
     */
    it('getAuth',
        inject([HttpService, XHRBackend], (httpservice, mockBackend) => {
            localStorage.setItem('userInfo', null);
            mockbody.code = 403;
            let testBed = getTestBed();
            mockBackendFunc(testBed);
            httpservice.get().subscribe(res => expect(res.codes).toEqual(403));
            localStorage.setItem('userInfo', JSON.stringify(user));
        }));
})
