create table Brand
(
    BrandId int identity
        primary key,
    Name    nvarchar(255)
)
go

create unique index Brand_Name_uindex
    on Brand (Name)
go

create table Client
(
    ClientId    int identity
        primary key,
    Name        nvarchar(255),
    LastName    nvarchar(255),
    PhoneNumber nvarchar(255),
    Email       nvarchar(255)
)
go

create table CustomerOrder
(
    CustomerOrderId int identity
        primary key,
    ClientId        int
        references Client,
    Date            datetime
)
go

create table Product
(
    ProductId int identity
        primary key,
    Name      nvarchar(255),
    Price     decimal(19, 4),
    BrandId   int
        references Brand
)
go

create table OrderDetail
(
    OrderDetailId   int identity
        primary key,
    CustomerOrderId int
        references CustomerOrder,
    ProductId       int
        references Product,
    Quantity        int
)
go


