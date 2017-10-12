import {Component} from '@angular/core';

@Component({
  template: `<h1>are you ok??</h1><h2>you are so stupy!!!</h2><a (click)="click()">确定</a>`,
})
export class TestComponent {
  click () {
    alert('FUCKKKKKK!!');
  }
}
