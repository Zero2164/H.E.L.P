using System.Collections.Generic;
using System.Threading.Tasks;
using HELP.API.Data;
using HELP.API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HELP.API.Controllers
{
    public class ChangesController : BaseApiController
    {
        private readonly DataContext _context;
        public ChangesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppKyChngLog>>> GetChngz()
        {
            return await _context.KyChngz.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppKyChngLog>> GetChng(int id)
        {
            return await _context.KyChngz.FindAsync(id);
        }
    }
}