json.body @message.body
json.image @message.image
json.user_name @message.user.name
json.user_id @message.user.id
json.date @massage.created_at.strftime("%Y/%m/%d %H:%M")
