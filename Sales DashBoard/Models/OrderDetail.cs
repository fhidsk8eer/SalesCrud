using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Sales_DashBoard.Migrations;

public partial class OrderDetail
{
    public int OrderDetailId { get; set; }
    
    public int? CustomerOrderId { get; set; }

    public int? ProductId { get; set; }

    public int? Quantity { get; set; }

    public virtual CustomerOrder? CustomerOrder { get; set; }

    public virtual Product? Product { get; set; }
}
