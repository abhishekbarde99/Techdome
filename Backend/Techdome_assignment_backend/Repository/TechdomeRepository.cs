using Techdome_assignment_backend.Context;
using Techdome_assignment_backend.Contract;
using Techdome_assignment_backend.Entities;
using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.AspNetCore.Identity;

namespace Techdome_assignment_backend.Repository
{
    public class TechdomeRepository : ITechRepository
    {

        private readonly TechdomeContext employeeContext;

        public TechdomeRepository(TechdomeContext _employeeContext)
        {
            employeeContext = _employeeContext;
        }


        //<-------------------Login_Method Start----------------->

        public Techdome Login(string Email, string Password1)
        {
        
            using (var connection = employeeContext.CreateConnection())
            {
                try
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand();
                    cmd.Connection = (SqlConnection)connection;

                    cmd.CommandType = CommandType.Text;




                    cmd.Parameters.AddWithValue("@Email", Email);
                    cmd.Parameters.AddWithValue("@Password1", Password1);

                    cmd.CommandText = "SELECT * from Techdome_SignUp where Email = @Email and Password1 =@Password1";
                    //  cmd.CommandText = "GetLogin";



                    SqlDataReader dr = cmd.ExecuteReader();

                    if (dr.Read())
                    {
                        Techdome emp = new Techdome();

                        emp.Email = dr.GetString("Email");
                        emp.Password1 = dr.GetString("Password1");
                        emp.Name = dr.GetString("Name");

                        return emp;
                    }
                    else
                    {
                        return null;
                    }

                    dr.Close();

                }
                catch (Exception ex)
                {

                    throw;
                }
                finally
                {
                    connection.Close();
                }
            }

        }

        //<-------------------Login_Method End----------------->

        public void Techdome_signup(Techdome emp)
        {

            using (var connection = employeeContext.CreateConnection())
            {
                try
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand();
                    cmd.Connection = (SqlConnection)connection;

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = "Techdome_SignUp_Query";

                    cmd.Parameters.AddWithValue("@Name", emp.Name);
                    cmd.Parameters.AddWithValue("@Email", emp.Email);
                    cmd.Parameters.AddWithValue("@Password1", emp.Password1);
                   

                    cmd.ExecuteNonQuery();
                }
                catch (Exception ex)
                {
                    throw;
                }
                finally
                {
                    connection.Close();
                }
            }

        }

        public bool Techdome_Mailcheck(string email)
        {

            using (var connection = employeeContext.CreateConnection())
            {
                try
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand();
                    cmd.Connection = (SqlConnection)connection;
                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.CommandText = "select * from Techdome_SignUp where Email = @Email";


                    SqlDataReader dr = cmd.ExecuteReader();

                    if (dr.Read())
                    {
                        Techdome emp = new Techdome();

                        emp.Email = dr.GetString("Email");

                        return true;
                    }
                    else
                    {
                        return false;
                    }

                    dr.Close();

                }
                catch (Exception ex)
                {

                    throw;
                }
                finally
                {
                    connection.Close();
                }
            }

        }


    }
}
