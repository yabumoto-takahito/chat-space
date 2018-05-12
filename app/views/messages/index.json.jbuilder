json.array! @new_message do |message|
  json.body message.body
  json.image message.image.url
  json.user_name message.user.name
  json.date message.created_at.to_s(:simple_time)
  json.id message.id
end
