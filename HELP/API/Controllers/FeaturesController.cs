using System.Collections.Generic;
using System.Threading.Tasks;
using HELP.API.Data;
using HELP.API.DTOs;
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

        [HttpPost("add/feature")]
        public async Task<ActionResult<AppKyFeature>> AddFeature(AddFeatureDto addFeatureDto)
        {
            if(await featureExists(addFeatureDto.Feature)) return BadRequest("Feature Name already exists.");
            

            var newFeature = new AppKyFeature
            {
                KyNewFeature = addFeatureDto.Feature.ToLower(),
                KyNewFeatureDetails = addFeatureDto.FeatureDetails,
                KyFeatureDue = addFeatureDto.FeatureDue,
                KyFeaturePhotoUrl = addFeatureDto.FeaturePhotoUrl
            };

            _context.KyFeatures.Add(newFeature);
            await _context.SaveChangesAsync();

            return newFeature;
        }

        private async Task<bool> featureExists(string newFeature)
        {
            return await _context.KyFeatures.AnyAsync(x => x.KyNewFeature == newFeature.ToLower());
        }
    }
}