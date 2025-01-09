namespace BaseSignalR.Api.Hubs
{
    public interface IUserHub
    {
        Task UpdateTotalView(int totalView);
        Task UpdateTotalUser(int totalUser);
    }
}
