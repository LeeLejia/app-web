import {NgModule} from '@angular/core';
import {DeveloperHomeComponent} from './home/developer-home.component';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {AppListComponent} from './app/app-list';
import {HeaderComponent} from './home/header/header';
import {SideNavigationComponent} from './home/side-navigation/side-navigation';
import {CommonModule} from '@angular/common';

const routers = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DeveloperHomeComponent, children: [
  {path: '', redirectTo: 'app-list', pathMatch: 'full',},
  {path: 'app-list', component: AppListComponent},
  ]},
];
@NgModule({
  declarations: [
    DeveloperHomeComponent,
    SideNavigationComponent,
    HeaderComponent,
    AppListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  providers: [
    AuthenticationService
  ],
})
export class DeveloperModule {}
