using System;
using System.ComponentModel.DataAnnotations;

namespace HELP.API.DTOs
{
    public class AddFeatureDto
    {
        [Required]
        public string Feature { get; set; }

        [Required]
        public string FeatureDetails { get; set; }

        public DateTime FeatureDue { get; set; }

        public string FeaturePhotoUrl { get; set; }
    }
}