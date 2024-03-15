using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace Sales_DashBoard.Migrations;

public partial class Brand
{
    [Display(Name = "Brand")]
    public int BrandId { get; set; }
    public string? Name { get; set; }
    public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    public override string ToString()
    {
        return CultureInfo.CurrentCulture.TextInfo.ToTitleCase(Name!.ToLower());
    }
}
