-- Multi-Table Query Practice

-- todo Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select ProductName, CategoryName from product as p
join category on p.categoryid = category.id

-- todo Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
-- WHY is Order not letting me select from it? 
select o.id, CompanyName  from `order` as o 
join shipper as s on s.id = o.shipvia where OrderDate < '2012-08-09'


-- todo Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select ProductName, Quantity  from orderdetail 
join product on orderdetail.productId = product.id where orderdetail.orderid = 10251 order by productName

-- todo Display the OrderID, employee's LastName for  FROM ORDER TABLE Customer's Company Name and the every order. All columns should be labeled clearly. Displays 16,789 records.

select o.id, CompanyName, LastName from  `order` as o
join customer on customer.id = o.customerId
join employee on employee.id = o.EmployeeId