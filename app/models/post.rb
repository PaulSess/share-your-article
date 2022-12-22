class Post < ApplicationRecord
  validates :description, presence: true, uniqueness: true
  validates :content, presence: true, uniqueness: true
end
