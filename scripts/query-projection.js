// select _id, name, category from products
db.products.find({}, {
    name: 1,
    category: 1
});

// select _id, name, category, price from products
db.products.find({}, {
    tags: 0
});

// select _id, name, category, price, tags[first] from products where tags in ("samsung", "logitech")
db.products.find({
    tags: {
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
}, {
    name: 1,
    category: 1,
    price: 1,
    "tags.$": 1
});

// select _id, name, category, price, tags(in ("samsung", "logitech")) from products
db.products.find({}, {
    name: 1,
    category: 1,
    price: 1,
    tags: {
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
});

// select *, score from products where $search like "monitor"
db.products.find({
    $text: {
        $search: "samsung"
    }
},{
    score: {
        $meta: "textScore"
    }
});