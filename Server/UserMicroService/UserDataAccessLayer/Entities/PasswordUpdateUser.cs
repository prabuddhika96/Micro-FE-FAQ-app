using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserDataAccessLayer.Entities
{
    public class PasswordUpdateUser
    {
        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+])[A-Za-z\d!@#$%^&*()-_=+]{8,}$", ErrorMessage = "Invalid Password")]
        public string? newPassword { get; set; } 

        [Required]
        public string? oldPassword { get; set; }
    }
}
