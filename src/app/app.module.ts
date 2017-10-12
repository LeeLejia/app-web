import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MeditorService} from './services/meditor.service';
import {AlertComponent} from './share/alert/alert.component';
import {ContainerComponent} from './app';
import {ModalDialogComponent} from './share/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    AlertComponent,
    ContainerComponent,
    ModalDialogComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [MeditorService],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
