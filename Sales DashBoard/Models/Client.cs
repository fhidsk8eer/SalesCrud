using System;
using System.Collections.Generic;

namespace Sales_DashBoard.Migrations;

public partial class Client
{
    public int ClientId { get; set; }

    public string? Name { get; set; }

    public string? LastName { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Email { get; set; }

    public virtual ICollection<CustomerOrder> CustomerOrders { get; set; } = new List<CustomerOrder>();
    
}
