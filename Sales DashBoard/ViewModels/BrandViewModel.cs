using Sales_DashBoard.Migrations;

namespace Sales_DashBoard.ViewModels;

public class BrandViewModel
{
    public IEnumerable<Brand> Brands { get; set; }
    
    public Brand Brand { get; set; }
    
    public IEnumerable<Product> Products { get; set; }
    
}