using Microsoft.AspNetCore.SignalR;

namespace BaseSignalR.Api.Hubs
{
    public class UserHub : Hub<IUserHub>
    {
        public static int TotalViews { get; set; }
        public static int TotalUsers { get; set; }
        public override Task OnConnectedAsync()
        {
            TotalUsers++;
            Clients.All.UpdateTotalUser(TotalUsers).GetAwaiter().GetResult();
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception? exception)
        {
            TotalUsers--;
            Clients.All.UpdateTotalUser(TotalUsers).GetAwaiter().GetResult();
            return base.OnDisconnectedAsync(exception);
        }
        public async Task<string> NewWindowLoaded(string name)
        {
            TotalViews++;
            await Clients.All.UpdateTotalView(TotalViews);
            return $"total view from {name} - {TotalViews}";
        }
    }
}
