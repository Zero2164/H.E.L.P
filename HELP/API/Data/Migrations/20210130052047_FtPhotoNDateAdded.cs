using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class FtPhotoNDateAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "KyFeatureDue",
                table: "KyFeatures",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "KyFeaturePhotoUrl",
                table: "KyFeatures",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "KyFeatureDue",
                table: "KyFeatures");

            migrationBuilder.DropColumn(
                name: "KyFeaturePhotoUrl",
                table: "KyFeatures");
        }
    }
}
