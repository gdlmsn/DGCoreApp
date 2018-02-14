using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DGCoreApp.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Insert into Makes (Name) Values ('Make1')");
            migrationBuilder.Sql("Insert into Makes (Name) Values ('Make2')");
            migrationBuilder.Sql("Insert into Makes (Name) Values ('Make3')");

            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make1-ModelA', (Select ID from Makes Where Name='Make1'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make1-ModelB', (Select ID from Makes Where Name='Make1'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make1-ModelC', (Select ID from Makes Where Name='Make1'))");

            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make2-ModelA', (Select ID from Makes Where Name='Make2'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make2-ModelB', (Select ID from Makes Where Name='Make2'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make2-ModelC', (Select ID from Makes Where Name='Make2'))");


            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make3-ModelA', (Select ID from Makes Where Name='Make3'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make3-ModelB', (Select ID from Makes Where Name='Make3'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make3-ModelC', (Select ID from Makes Where Name='Make3'))");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Delete From Makes where name in ('Make1','Make2', 'Make3')");
        }
    }
}
