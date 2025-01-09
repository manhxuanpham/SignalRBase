import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHubComponent } from './component/user-hub/user-hub.component';
import { DeathlyHallowComponent } from './component/deathly-hallow/deathly-hallow.component';
const routes: Routes = [
  {
    path: 'user-hub',
    component: UserHubComponent,
  },
  {
    path: 'deathly-hallow',
    component: DeathlyHallowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
