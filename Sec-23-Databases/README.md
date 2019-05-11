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
