import {NgModule} from '@angular/core';
import {DeveloperHomeComponent} from './home/developer-home.component';
import {RouterModule} from '@angular/router';
const routers = [
  {path: '', component: DeveloperHomeComponent},
  {path: 'home', component: DeveloperHomeComponent},
];
@NgModule({
  declarations: [
    DeveloperHomeComponent,
  ],
  imports: [
    RouterModule.forChild(routers)
  ],
  providers: [
  ],
})
export class DeveloperModule {}
