Avatar Handling Sample
======


This application is a sample framework for adding, updating and deleting users' avatars
As per the scope it is designed  in a Restful/stateless manner, so that the server does not store the user identity information.

Specification
* Ruby version 2.2.0
* Rails version 4.1.5
* Database mySQL 5.5

* For security purposes file config/database.yml has been deleted.
  To launch the applcation you have to put your database.yml file in config directory. It should contain database access data, such as:

```
development:
  adapter: mysql2
  database: YOUR DATABASE NAME
  host: YOUR HOST
  username: USERNAME
  password: PASSWORD
  timeout: 5000
  encoding: utf8
```

You may also need to create your config/secrets.yml file with the following code:

```
# Be sure to restart your server when you modify this file.
# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!
# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.
# Make sure the secrets in this file are kept private
# if you're sharing your code publicly.
development:
   secret_key_base: <30 random characters>
test:
   secret_key_base: <30 random characters>

# Do not keep production secrets in the repository,
# instead read values from the environment.
production:
   secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>

```

Install the required gems:
```
bundle install
```

To initialize the database (after adding database.yml file above) run the following set of commands
```
 rake db:create
 rake db:migrate
 rake db:seed
```
