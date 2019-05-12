# Databases

## SQL vs NoSQL

Common SQL Databases include:

* PostgreSQL
* MySQL

SQL databases are relational. 

Common NoSQL Databases include:

* Mongo
* Redis

NoSQL databases are non-relational. 

SQL databases are designed as tables and require a schema. If no value for an entry, SQL will fill it in as a Null. 

In Mongo, database will be represented as a JSON object rather than as a table. You would have key-value pairs, so none of the objects have to have the same shape or structured. NoSQL databases are more flexible to changes. 

If you have data with lots of relationships, SQL is generally better. If you have a lot of data of one-to-many type, NoSQL database might be better. NoSQL databases are also more scalable. 

## MongoDB

[How to Download and Install Mongo DB on Windows](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)

Data directory: MongoDB\Server\4.0\data\

In Bash, type "vim". Press "i" to enter insert mode. 

## MongoDB: CRUD Operations

CRUD stands for Create Read Update Delete. 

In order to launch MongoDB from terminal:

```
mongod
```

Open new terminal window and enter:

```
mongo
```

If you need help with commands, type in:

```
help
```

To show all the databases:

```
show dbs
```

MongoDB is preloaded with 3 databases (admin, config, local). 

Create new database called shopDB:

```
use shopDB
```

In order to see what database you are in:

```
db
```

Insert new items into a collection:

```
db.collection.insertOne()
db.collection.insertMany()
```

[.insertMany() docs](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/#db.collection.insertMany)

Example:

```
db.products.insert({id: 1, name: "pen", price: 1.20})
```

See collections:

```
show collections
```

## MongoDB: Reading and Queries

To read database:

```
db.product.find()
```

This will read entire collection. You can make specific query like:

```
db.product.find({name: "pencil"})
```

This will only find documents where the name field is "pencil". 

Only find documents where price is greater than $1:

```
db.product.find({price: {$gt: 1})
```

## MongoDB: How to Updata Data

[Update Documents](https://docs.mongodb.com/manual/tutorial/update-documents/)

Update document to add stock:

```
db.products.updateOne({_id: 1}, {$set: {stock: 32}}
```

## MongoDB: Delete


