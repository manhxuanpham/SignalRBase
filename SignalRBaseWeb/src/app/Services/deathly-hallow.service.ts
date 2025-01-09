import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeathlyHallowHubService {
  private hubConnection!: signalR.HubConnection;
  private baseUrl = 'https://localhost:7100';
  constructor(private http: HttpClient) {}

  public async startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(this.baseUrl + `/hubs/deathly-hallow`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
        withCredentials: true,
      })
      .withAutomaticReconnect([0, 20, 30, 60])
      .build();

    await this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  }

  public stopConnection(eventName: string) {
    if (this.hubConnection) {
      this.hubConnection.off(eventName);
    } else {
      console.error('Hub connection is not established');
    }
  }
  public getViewsCount(
    callback: (data: { Wand: number; Cloak: number; Stone: number }) => void
  ) {
    this.hubConnection.on('updateDeathlyHallowCount', callback);
  }
  public GetRaceStatus(): any {
    return this.hubConnection.invoke('GetRaceStatus').then((val: string) => {
      console.log(val);
      return val;
    });
  }
  public Vote(type: string): Observable<any> {
    const url = this.baseUrl + `/api/deathly-hallow/vote?type=${type}`;
    return this.http.get(url).pipe();
  }
}
