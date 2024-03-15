using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace Sales_DashBoard.Migrations;

public partial class Product
{
    [Display(Name = nameof(Product))]
    public int ProductId { get; set; }

    public string? Name { get; set; }

    [DisplayFormat(DataFormatString = "{0:C}")]
    public decimal? Price { get; set; }

    [Display(Name = "Brand")]
    public int? BrandId { get; set; }

    public virtual Brand? Brand { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public override string ToString()
    {
        return CultureInfo.CurrentCulture.TextInfo.ToTitleCase(Name!.ToLower());
    }
}
