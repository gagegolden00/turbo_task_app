class Task < ApplicationRecord
  has_one :user
  has_secure_password
end
