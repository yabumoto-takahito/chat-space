# データベース設計 #

## messages ##

|column|type|option|
|:-----|:---|:----:|
|body|text||
|image|string||
|group_id|references|foreign_key|
|user_id|references|foreign_key|

### Association ###
- belongs_to :user
- belongs_to :group


## users ##

|column|type|option|
|:-----|:---|:----:|
|name|string|not null|
|email|text|not_null, unique|
|password|string|not null|

### Association ###
- has_many :messages
- has_many :groups through: :group_users
- has_many :group_users


## groups ##

* Deployment instructions
|column|type|option|
|:-----|:---|:----:|
|name|string|not null|

### Association ###
- has_many :messages
- has_many :users through: :group_users
- has_many :group_users


## group_users ##

|column|type|option|
|:-----|:---|:----:|
|user_id|references|not null, foreign_key|
|group_id|references|not null, foreign_key|

### Association ###
- belongs_to :user
- belongs_to :group
