using Authentication.Domain.Entities;

namespace Authentication.Infra
{
    public static class UserRepository
    {
        private static List<User> users = new();
        static UserRepository()
        {
            users.Add(new User { Id = Guid.NewGuid(), UserName = "batman", Password = "batman123456", Role = "simples", Email = "batman@test.com" });
            users.Add(new User { Id = Guid.NewGuid(), UserName = "robin", Password = "robin123456", Role = "simples", Email = "robin@test.com" });
            users.Add(new User { Id = Guid.NewGuid(), UserName = "admin", Password = "admin123456", Role = "manager", Email = "admin@test.com" });
        }
        public static User Get( string email, string password)
        {            
            return users.FirstOrDefault(x => x.Email.ToLower() == email.ToLower() && x.Password == x.Password);
        }
    }
}
