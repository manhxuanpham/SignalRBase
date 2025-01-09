import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHubComponent } from './user-hub/user-hub.component';

const routes: Routes = [
  {
    path: 'user-hub',
    component: UserHubComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
