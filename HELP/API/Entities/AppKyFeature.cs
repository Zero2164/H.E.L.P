using System;

namespace HELP.API.Entities
{
    public class AppKyFeature
    {
        public int Id { get; set; }

        public string KyNewFeature { get; set; }

        public string KyNewFeatureDetails { get; set; }

        public DateTime KyFeatureDue { get; set; }

        public string KyFeaturePhotoUrl { get; set; }
    }
}