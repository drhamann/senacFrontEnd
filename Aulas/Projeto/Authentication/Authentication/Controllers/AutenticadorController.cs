using Microsoft.AspNetCore.Mvc;

namespace Authentication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutenticadorController : ControllerBase
    {       
        [HttpPost]
        public ActionResult LoginResponse(string email, string senha) 
        {
            if (email.Equals("teste@senac.br") && senha.Equals("123456"))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}