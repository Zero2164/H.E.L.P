using System.Collections.Generic;
using System.Threading.Tasks;
using HELP.API.Data;
using HELP.API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HELP.API.Controllers
{
    public class FeaturesController : BaseApiController 
    {
        private readonly DataContext _context;
        public FeaturesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppKyFeature>>> GetFeatures()
        {
            return await _context.KyFeatures.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppKyFeature>> GetFeature(int id)
        {
            return await _context.KyFeatures.FindAsync(id);
        }
    }
}