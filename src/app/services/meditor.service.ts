


import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MeditorService {
  private subject = new Subject<{id: string, body: any}>();
  constructor() {}
  // 获取订阅者
  public getObservable (): Observable<{id: string, body: any}> {
    return this.subject.asObservable();
  }
  // 推送信息
  public push(msg: {id: string, body: any}) {
    this.subject.next(msg);
  }
}
