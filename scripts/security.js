// use admin database
// use admin

db.createUser(
    {
        user: "medio",
        pwd: "medio",
        roles: [ 
            "readWrite"
        ]
    }
)

// Connect to mongodb with username & password
// mongo --username mongo --password mongo --host localhost --port 27017