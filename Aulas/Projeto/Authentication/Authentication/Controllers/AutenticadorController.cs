﻿using Authentication.Application.Services;
using Authentication.Domain.Entities;
using Authentication.Infra;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Authentication.Controllers
{
    [ApiController]
    [Route("api/autenticador")]
    [Authorize]
    public class AutenticadorController : ControllerBase
    {
        private IUserRepository _userRepository { get;  }

        public AutenticadorController(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public async Task<IActionResult> Authenticate(UserLoginRequest model)
        {
            // Recupera o usuário
            var user = await _userRepository.Get(model.Email, model.Password);

            // Verifica se o usuário existe
            if (user == null)
                return BadRequest(new { message = "Usuário ou senha inválidos" });

            // Gera o Token
            var token = TokenService.GenerateToken(user);
            // Retorna os dados
            return Ok(token);
        }
    }

    public class UserLoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

}