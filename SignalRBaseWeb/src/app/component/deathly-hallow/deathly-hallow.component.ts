import { Component, OnDestroy, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { DeathlyHallowHubService } from 'src/app/Services/deathly-hallow.service';

@Component({
  selector: 'app-deathly-hallow',
  templateUrl: './deathly-hallow.component.html',
  styleUrls: ['./deathly-hallow.component.scss'],
})
export class DeathlyHallowComponent implements OnInit, OnDestroy {
  voteData: any = null;
  constructor(private deathlyHallowService: DeathlyHallowHubService) {}
  ngOnInit(): void {
    this.deathlyHallowService.startConnection().then(() => {
      this.deathlyHallowService
        .GetRaceStatus()
        .then((result: any) => {
          this.voteData = result;
        })
        .catch((err: any) => {
          console.log(err);
        });
      this.deathlyHallowService.getViewsCount((val) => {
        this.voteData = val;
      });
    });
  }
  ngOnDestroy(): void {
    this.deathlyHallowService.stopConnection('updateDeathlyHallowCount');
  }
  vote(type: string): void {
    this.deathlyHallowService.Vote(type).subscribe((result: any) => {});
  }
}
