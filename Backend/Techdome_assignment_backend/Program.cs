using Techdome_assignment_backend.Context;
using Techdome_assignment_backend.Contract;
using Techdome_assignment_backend.Entities;
using Techdome_assignment_backend.Repository;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
//using FluentAssertions.Common;
using Microsoft.AspNetCore.DataProtection.Repositories;
//using Microsoft.Extensions.DependencyInjection;

namespace Techdome_assignment_backend
{
    public class Program
    {
        public static void Main(string[] args)
        {

            try
            {
                 var builder = WebApplication.CreateBuilder(args);
               
                // Add services to the container.

                builder.Services.AddSingleton<TechdomeContext>();
                builder.Services.AddScoped<ITechRepository, TechdomeRepository>();

                builder.Services.AddControllers();


                // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
                builder.Services.AddEndpointsApiExplorer();
                //builder.Services.AddSwaggerGen();
                builder.Services.AddSwaggerGen(options =>
                {
                    options.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
                });




                builder.Services.AddCors(options =>
                  options.AddPolicy("MyPolicy",
                                builder =>
                                {
                                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                                }
                     )
                );

                var app = builder.Build();

                // Configure the HTTP request pipeline.
                if (app.Environment.IsDevelopment())
                {
                    app.UseSwagger();
                    app.UseSwaggerUI();
                }


                app.UseCors("MyPolicy");

                app.UseAuthorization();


                app.MapControllers();

                app.Run();
            }
            catch (Exception)
            {

            }


        }
    }
}