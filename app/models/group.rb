class Group < ApplicationRecord
  has_many :messages
  has_many :groups_users
  has_many :users, through: :groups_users
  validates :name, presence: true
end
