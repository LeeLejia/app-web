import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MeditorService} from './services/meditor.service';
import {AlertComponent} from './share/alert/alert.component';
import {ContainerComponent} from './app';
import {ModalDialogComponent} from './share/modal-dialog/modal-dialog.component';
import {TestComponent} from './test/test.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './services/authentication.service';
import {Http, HttpModule} from '@angular/http';
import {Router, RouterModule} from '@angular/router';
import {config} from '../config/config';


export const routers = [
  {path: config.urls.login.substr(1), component: LoginComponent},
];

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
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routers),
  ],
  providers: [MeditorService, AuthenticationService],
  bootstrap: [ContainerComponent]
})
export class AppModule {}
