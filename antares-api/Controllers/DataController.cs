using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Graph;
using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace antares_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DataController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly GraphServiceClient _graphServiceClient;
        public DataController(IConfiguration configuration, GraphServiceClient graphServiceClient)
        {
            _configuration = configuration;
            _graphServiceClient = graphServiceClient;
        }

        [HttpGet("GetAuthToken")]
        public IActionResult GetAuthToken()
        {
            string authority = _configuration.GetValue<string>("AzureAd:Authority");
            string clientId = _configuration.GetValue<string>("AzureAd:AppClientId");
            string clientSecret = _configuration.GetValue<string>("AzureAd:AppClientSecret");
            string resource = _configuration.GetValue<string>("AzureAd:Resource");

            var authContext = new AuthenticationContext(authority);
            var clientCredential = new ClientCredential(clientId, clientSecret);
            var token = authContext.AcquireTokenAsync(resource, clientCredential).Result.AccessToken;
            return Ok(token);
        }

        [Authorize(Roles = "Api.ReadOnly")]
        [HttpGet("GetAzureUsers")]
        public async Task<IActionResult> GetAzureUsers()
        {
            var users = await _graphServiceClient.Users.Request().Select(x => new
            {
                x.DisplayName,
                x.UserPrincipalName,
                x.Mail,
                x.Department,
            }).GetAsync();

            return Ok(users);
        }

        [Authorize(Roles = "Api.ReadOnly")]
        [HttpGet("GetTeamChannels")]
        public async Task<IActionResult> GetTeamChannels()
        {
            var channels = await _graphServiceClient.Teams["6d4cacd3-511c-4fc2-8aff-8938b375e01d"].Channels
                        .Request()
                        .GetAsync();

            return Ok(channels);
        }
    }
}
