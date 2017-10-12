import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MeditorService} from './services/meditor.service';
import {AlertComponent} from './share/alert/alert.component';
import {ContainerComponent} from './app';
import {ModalDialogComponent} from './share/modal-dialog/modal-dialog.component';
import {TestComponent} from './test/test.component';

@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent,
    ContainerComponent,
    ModalDialogComponent,
    TestComponent,
  ],
  // 声明需要模式框加载的组件
  entryComponents: [
    TestComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [MeditorService],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
