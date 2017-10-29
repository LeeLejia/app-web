import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MeditorService} from './services/meditor.service';
import {AlertComponent} from './share/alert/alert.component';
import {ContainerComponent} from './app';
import {ModalDialogComponent} from './share/modal-dialog/modal-dialog.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './services/authentication.service';
import {Http, HttpModule} from '@angular/http';
import {Router, RouterModule} from '@angular/router';
import {config} from '../config/config';
import {RegisterComponent} from './register/register.component';
import {ToastComponent, ToastMsg} from './share/toast/toast';

// 路由配置
export const routers = [
  {
    path: '',
    redirectTo: config.api.login.substr(1),
    pathMatch: 'full'
  },
  {path: config.api.login.substr(1), component: LoginComponent},
  {path: config.api.register.substr(1), component: RegisterComponent},
  {path: config.roles.developer.home.substr(1), loadChildren: './developer/developer.Module#DeveloperModule'}
];

@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent,
    ContainerComponent,
    ModalDialogComponent,
    ToastComponent,
    RegisterComponent,
  ],
  // 声明需要模式框加载的组件
  entryComponents: [

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
