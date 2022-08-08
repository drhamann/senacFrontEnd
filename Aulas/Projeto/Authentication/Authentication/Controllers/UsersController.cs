using Authentication.Domain.Entities;
using Authentication.Infra;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Authentication.Controllers
{
    [Route("api/Users")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        public IUserRepository _userRepository { get; }

        public UsersController(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = _userRepository.GetAll();
            if(users != null)
                return Ok(users);
            return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> Create(UserRequest userCreateRequest)
        {
            //TODO : Validar chamada com fluentvalidation
            //TODO : Mapper request to user
            string error = await ValidateUserData(userCreateRequest);
            if (String.IsNullOrEmpty(error))
            {
                User user = UserMap(userCreateRequest);
                error = await _userRepository.Create(user);
                if (String.IsNullOrEmpty(error))
                {
                    return Ok();
                }
            }

            return BadRequest(error);
        }

        [HttpPut]
        public async Task<IActionResult> Update(UserRequest userUpdateRequest)
        {
            string error = await ValidateUserData(userUpdateRequest);
            if (String.IsNullOrEmpty(error))
            {
                User user = UserMap(userUpdateRequest);
                error = await _userRepository.Update(user);
                if (String.IsNullOrEmpty(error))
                {
                    return Ok();
                }
            }

            return BadRequest(error);
        }

        private static User UserMap(UserRequest userRequest)
        {
            var user = new User()
            {
                Email = userRequest.Email,
                Password = userRequest.Password,
                Role = userRequest.Role,
                UserName = userRequest.UserName
            };
            user.Id = string.IsNullOrEmpty(userRequest.Id!.ToString()) ? userRequest.Id : user.Id;
            return user;
        }

        private async Task<string> ValidateUserData(UserRequest userCreateRequest)
        {
            if (userCreateRequest == null)
            {
                return "Dados invalidos";
            }
            if (string.IsNullOrEmpty(userCreateRequest.Id.ToString()) == true && await _userRepository.Check(userCreateRequest.Email))
            {
                return "Usuario já existe";
            }
            if (userCreateRequest.Password.Equals(userCreateRequest.ConfirmPassword) is false)
            {
                return "Senha não confere";
            }
            return string.Empty;
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(Guid id)
        {
            string error = await _userRepository.CheckIfIdExist(id);
            if (String.IsNullOrEmpty(error))
            {
                error = await _userRepository.Delete(id);
                if (String.IsNullOrEmpty(error))
                {
                    return Ok();
                }
            }
            return BadRequest(error);
        }
    }


    public class UserRequest
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Role { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
