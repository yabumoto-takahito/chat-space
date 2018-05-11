json.aaray! @messages do |message|
  json.body @message.body
  json.image @message.image.url
  json.user_name @message.user.name
  json.date @message.created_at.to_s(:simple_time)
end
