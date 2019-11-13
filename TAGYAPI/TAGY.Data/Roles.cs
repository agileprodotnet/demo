using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TAGY.Data
{
    public class Roles
    {
        public void SaveData()
        {
            var context = new TagyEntities();
            var role = new Role()
            {
                RoleName = "nEW Admin user",
                CreatedDateTime = DateTime.Now,
                UpdatedDatetime = DateTime.Now
            };
            context.Roles.Add(role);

            context.SaveChanges();
        }
    }
}
