import {NgModule} from '@angular/core';
import {DeveloperHomeComponent} from './developer-home.component';
import {SideNavigationComponent} from './side-navigation/side-navigation';
import {HeaderComponent} from './header/header';
import {RouterModule} from '@angular/router';
const routers = [
  {path: '', component: DeveloperHomeComponent},
  {path: 'home', component: DeveloperHomeComponent},
  {path: '', component: DeveloperHomeComponent},
];
@NgModule({
  declarations: [
    DeveloperHomeComponent,
    SideNavigationComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule.forChild(routers),
  ],
  providers: [
  ],
})
export class DeveloperHomeModule {}
