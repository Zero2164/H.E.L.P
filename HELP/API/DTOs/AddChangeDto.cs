using System;
using System.ComponentModel.DataAnnotations;

namespace HELP.API.DTOs
{
    public class AddChangeDto
    {
        [Required]
        public string Change { get; set; }

        [Required]
        public string ChangeDetails { get; set; }
        
        public DateTime Created { get; set; }
    }
}