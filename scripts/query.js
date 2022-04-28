// select *  from customers where _id = 'ravi'
db.customers.find({
    _id: "ravi"
});

// select * from customers where name = 'Ravi Mukti'
db.customers.find({
    name: "Ravi Mukti"
});

// select * from customers where id = 'ravi' and name = 'Ravi Mukti'
db.customers.find({
    _id: "ravi",
    name: "Ravi Mukti"
});

// select * from products where price = 2000
db.products.find({
    price: 2000
});

// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});