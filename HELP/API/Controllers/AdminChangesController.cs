using System.Threading.Tasks;
using HELP.API.Data;
using HELP.API.Entities;
using HELP.API.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HELP.API.Controllers
{
    public class AdminChangesController : BaseApiController
    {
        private readonly DataContext _context;
        public AdminChangesController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("add/change")]
        public async Task<ActionResult<AppKyChngLog>> AddChng(AddChangeDto addChangeDto)
        {
            if(await chngExists(addChangeDto.Change)) return BadRequest("Change Name already exists.");
            

            var newChange = new AppKyChngLog
            {
                KyNewChng = addChangeDto.Change.ToLower(),
                KyChngDetails = addChangeDto.ChangeDetails,
                KyCreated = addChangeDto.Created
            };

            _context.KyChngz.Add(newChange);
            await _context.SaveChangesAsync();

            return newChange;
        }

        private async Task<bool> chngExists(string newChange)
        {
            return await _context.KyChngz.AnyAsync(x => x.KyNewChng == newChange.ToLower());
        }
    }
}