import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class UserHubService {
  private hubConnection!: signalR.HubConnection;
  private baseUrl = 'https://localhost:7100';
  public async startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(this.baseUrl + `/hubs/user-count`, {
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
  public getUserCount(callback: any) {
    this.hubConnection.on('UpdateTotalUser', callback);
  }
  public getViewsCount(callback: any) {
    this.hubConnection.on('UpdateTotalView', callback);
  }
  public newWindowLoadedOnClient(name: string): any {
    return this.hubConnection
      .invoke('NewWindowLoaded', name)
      .then((val: string) => {
        console.log(val);
        return val;
      });
  }
}
