using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserBusinessLogicLayer.CustomErrors
{
    public class PasswordError:Exception
    {
        public PasswordError()
        {
        }

        public PasswordError(string message)
            : base(message)
        {
        }

        public PasswordError(string message, Exception innerException)
            : base(message, innerException)
        {
        }

    }
}
