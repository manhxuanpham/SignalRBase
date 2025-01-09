import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserHubService } from '../Services/user-hub.service';

@Component({
  selector: 'app-user-hub',
  templateUrl: './user-hub.component.html',
  styleUrls: ['./user-hub.component.scss'],
})
export class UserHubComponent implements OnInit, OnDestroy {
  totalViews: any = null;
  totalUsers: any = null;

  constructor(private userHubService: UserHubService) {}
  ngOnInit(): void {
    this.userHubService.startConnection().then(() => {
      const name = 'Angular Client';
      this.userHubService.newWindowLoadedOnClient(name).then((val: string) => {
        // this.totalViews = val;
        console.log(val);
      });
    });
    this.userHubService.getUserCount((data: number) => {
      console.log('user count: ' + data);
      this.totalUsers = data;
    });
    this.userHubService.getViewsCount((viewCount: number) => {
      console.log('view count', viewCount);
      this.totalViews = viewCount;
    });
  }
  ngOnDestroy(): void {
    this.userHubService.stopConnection('UpdateTotalUser');
  }
  btnInvoke(): void {
    const name = 'Angular Client';
    this.userHubService.newWindowLoadedOnClient(name).then((val: string) => {
      this.totalViews = val;
    });
  }
}
