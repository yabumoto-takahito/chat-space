# README
# データベース設計 #

This README would normally document whatever steps are necessary to get the
application up and running.
## messages ##

Things you may want to cover:
|column|type|option|
|:-----|:---|:----:|
|body|text||
|image|string||
|group_id|references|foreign_key|
|user_id|references|foreign_key|

* Ruby version
### Association ###
- belongs_to :user
- belongs_to :group

* System dependencies

* Configuration
## users ##

* Database creation
|column|type|option|
|:-----|:---|:----:|
|name|string|not null|
|email|text|not_null, unipue|
|password|string|not null|

* Database initialization
### Association ###
- has_many :messages
- has_many :groups through: :group_users
- has_many :group_users

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)
## groups ##

* Deployment instructions
|column|type|option|
|:-----|:---|:----:|
|name|string|not null|

* ...
### Assocoation ###
- has_many :messages
- has_many :users through: :group_users
- has_many :group_users


## group_users ##

|column|type|option|
|:-----|:---|:----:|
|user_id|references|not null,foreign_key|
|group_id|references|not null,foreign_key|

### Association ###
- belongs_to :user
- belongs_to :group
