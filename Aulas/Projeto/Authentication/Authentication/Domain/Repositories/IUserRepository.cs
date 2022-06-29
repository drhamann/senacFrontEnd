using Authentication.Domain.Entities;

namespace Authentication.Infra
{
    public interface IUserRepository
    {
        List<User> Users { get; }

        Task<User> Get(string email, string password);
        Task<bool> Check(string email);
        Task<string> CheckIfIdExist(Guid id);
        Task<string> Create(User user);
        Task<string> Delete(Guid id);
        Task<IEnumerable<User>> GetAll();
        Task<string> Update(User user);
    }
}