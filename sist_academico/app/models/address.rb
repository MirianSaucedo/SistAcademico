class Address < ActiveRecord::Base
  attr_accessible :barrio, :direccion, :city_id, :tipo
  belongs_to :city
  delegate :city, to: :city, prefix: true
  has_many :users
  validates :barrio, presence: true, length: { maximum: 30, minimum: 5 }, :format => { :with => /\A[a-zA-Z\s]+\z/ }
  validates :direccion, presence: true, length: { maximum: 50, minimum: 10 }, uniqueness: true
  validates :city_id, presence: true
end
