Avatar Handling Sample
======


This application is a sample framework for adding, updating and deleting users' avatars
As per the scope it is designed  in a Restful/stateless manner, so that the server does not keep track of t$

Specification
* Ruby version 4.1.5
* Rails version 2.2.0
* Database mySQL 5.5

* For security purposes file config/database.yml has been deleted.
  To launch the applcation you have to put your database.yml file in config directory. It should contain in$

development:
  adapter: mysql2
  database: YOUR DATABASE NAME
  host: YOUR HOST
  username: USERNAME
  password: PASSWORD
  timeout: 5000
  encoding: utf8

