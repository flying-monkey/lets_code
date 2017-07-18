# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  image_url       :string           default("http://res.cloudinary.com/flying-monkey/image/upload/v1500417413/profile_avatar_ytdmt7.jpg"), not null
#  password_digest :string           not null
#  session_token   :string           not null
#  city_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end