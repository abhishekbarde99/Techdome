using Microsoft.Data.SqlClient;
using System.Data;
namespace Techdome_assignment_backend.Context
{
    public class TechdomeContext
    {

        private readonly IConfiguration _configuration;
        private readonly string _connectionstring;
        public TechdomeContext(IConfiguration configuration)
        {

            _configuration = configuration;
            _connectionstring = _configuration.GetConnectionString("DefaultConnection");

        }
        public IDbConnection CreateConnection() => new SqlConnection(_connectionstring);

    }
}
