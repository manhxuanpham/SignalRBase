using Microsoft.AspNetCore.SignalR;

namespace BaseSignalR.Api.Hubs
{

    public class DeathlyHallowHub:Hub
    {
        public Dictionary<string,int> GetRaceStatus()
        {
            return SD.DealthyHallowRace;
        }

    }
}
