import {NgModule} from '@angular/core';
import {DeveloperHomeComponent} from './home/developer-home.component';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {DeveloperHomeModule} from './home/Developer.Module';
const routers = [
  {path: '', component: DeveloperHomeComponent},
  {path: 'home', component: DeveloperHomeComponent},
  {path: '', component: DeveloperHomeComponent},
];
@NgModule({
  declarations: [
  ],
  imports: [
    DeveloperHomeModule,
    RouterModule.forChild(routers)
  ],
  providers: [
    AuthenticationService
  ],
})
export class DeveloperModule {}
