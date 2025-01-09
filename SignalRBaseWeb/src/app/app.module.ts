import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHubComponent } from './component/user-hub/user-hub.component';
import { UserHubService } from './Services/user-hub.service';
import { DeathlyHallowComponent } from './component/deathly-hallow/deathly-hallow.component';
import { HttpClientModule } from '@angular/common/http';
import { DeathlyHallowHubService } from './Services/deathly-hallow.service';

@NgModule({
  declarations: [AppComponent, UserHubComponent, DeathlyHallowComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserHubService, DeathlyHallowHubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
