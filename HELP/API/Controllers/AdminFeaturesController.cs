using System.Threading.Tasks;
using HELP.API.Data;
using HELP.API.DTOs;
using HELP.API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HELP.API.Controllers
{
    public class AdminFeaturesController : BaseApiController
    {
        private readonly DataContext _context;
        public AdminFeaturesController(DataContext context)
        {
            _context = context;
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