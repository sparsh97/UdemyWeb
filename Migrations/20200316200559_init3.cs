using Microsoft.EntityFrameworkCore.Migrations;

namespace UdemyWeb.Migrations
{
    public partial class init3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 2,
                column: "ImageUrl",
                value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV2qsk1lcNa95Cx52NTDKZ4BAU9cp1K0T0OQDojh69rdlL8c5&s");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 3,
                column: "ImageUrl",
                value: "https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 5,
                column: "ImageUrl",
                value: "https://i.ya-webdesign.com/images/stock-trading-icon-png-13.png");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 6,
                column: "ImageUrl",
                value: "https://www.rippedorange.co.nz/wp-content/uploads/2019/08/power-bi-icon-15.png");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 7,
                column: "ImageUrl",
                value: "https://i.ya-webdesign.com/images/unity-5-logo-png-11.png");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 8,
                column: "ImageUrl",
                value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLr-Bce3z-ztijAkOHbsXMMPY5qKUkL9IE4VsfOnnPcJcd8MWirg&s");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 9,
                column: "ImageUrl",
                value: "https://developer.nvidia.com/sites/default/files/akamai/UE_Logo_Icon_Black.png");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 2,
                column: "ImageUrl",
                value: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 3,
                column: "ImageUrl",
                value: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 5,
                column: "ImageUrl",
                value: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 6,
                column: "ImageUrl",
                value: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 7,
                column: "ImageUrl",
                value: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 8,
                column: "ImageUrl",
                value: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg");

            migrationBuilder.UpdateData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 9,
                column: "ImageUrl",
                value: "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg");
        }
    }
}
