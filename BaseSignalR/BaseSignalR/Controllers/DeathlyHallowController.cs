using BaseSignalR.Api.Hubs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace BaseSignalR.Api.Controllers
{
    [Route("api/deathly-hallow")]
    [ApiController]
    public class DeathlyHallowController : ControllerBase
    {
        private readonly IHubContext<DeathlyHallowHub> _deathlyHub;
        public DeathlyHallowController(IHubContext<DeathlyHallowHub> deathlyHub)
        {
            _deathlyHub = deathlyHub;
        }
        [HttpGet("vote")]
        public async Task<IActionResult> DeathlyHallows(string type)
        {
            if (SD.DealthyHallowRace.ContainsKey(type))
            {
                SD.DealthyHallowRace[type]++;
            }
            var result = new
            {
                wand = SD.DealthyHallowRace[SD.Wand],
                cloak = SD.DealthyHallowRace[SD.Cloak],
                stone = SD.DealthyHallowRace[SD.Stone]
            };
            await _deathlyHub.Clients.All.SendAsync("updateDeathlyHallowCount",result);
            return Ok();
        }
    }
}
