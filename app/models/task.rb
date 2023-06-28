class Task < ApplicationRecord
  has_one :user
  
  validates :title, presence: true
  validates :description, presence: true
  validates :status, presence: true
end
