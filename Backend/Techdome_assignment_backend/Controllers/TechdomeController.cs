using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;
using Newtonsoft.Json.Linq;
using   Techdome_assignment_backend.Contract;
using Techdome_assignment_backend.Entities;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Techdome_assignment_backend.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class TechdomeController : ControllerBase
    {
       
        private readonly ITechRepository _empRepository;
        public TechdomeController(ITechRepository empRepository)
        {
                _empRepository=empRepository;
        }


      

        [HttpPost, Route("Techdome_Signup")]
        public ActionResult Techdome_Signup(Techdome emp)
        {

            if (emp.Email != "null" && emp.Password1 != "null")
            {


                bool checkEmail = _empRepository.Techdome_Mailcheck(emp.Email);
                //var o = _empRepository.Login(Email, Password);

                if (!checkEmail)
                {
                    _empRepository.Techdome_signup(emp);
                    return Ok(emp);
                }
                else
                {
                    return StatusCode(403, "Email Already Exist");
                    // return BadRequest();
                }
            }
            else
            {
                return StatusCode(406, "Null value found");
            }


        }

        [HttpPost, Route("Login")]
        public ActionResult Login(string Email, string Password)
        {

            if (Email != "null" && Password != "null")
            {

                var o = _empRepository.Login(Email, Password);

                if (o != null)
                {

                    return Ok(o);
                    

                }
                else
                {
                    return StatusCode(400, "Wrong EmailId or Password");
                    // return BadRequest();
                }
            }
            else
            {
                return StatusCode(406, "Null value found");
            }

        }




    }



}
