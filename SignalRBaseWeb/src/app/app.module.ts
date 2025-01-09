import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHubComponent } from './user-hub/user-hub.component';
import { UserHubService } from './Services/user-hub.service';

@NgModule({
  declarations: [AppComponent, UserHubComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserHubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
