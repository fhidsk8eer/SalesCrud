namespace Sales_DashBoard.Migrations;

public partial class CustomerOrder
{
    public int CustomerOrderId { get; set; }
    
    public int? ClientId { get; set; }

    public DateTime? Date { get; set; }

    public virtual Client? Client { get; set; } 

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
    
}
