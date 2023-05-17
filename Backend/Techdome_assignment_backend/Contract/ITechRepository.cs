using Techdome_assignment_backend.Entities;
namespace Techdome_assignment_backend.Contract
{
    public interface ITechRepository
    {

        //<---------------------------------Techdome assignment ----------------->
        public void Techdome_signup(Techdome emp);

        public bool Techdome_Mailcheck(string email);

        public Techdome Login(string Email, string Pass);

    }
}
