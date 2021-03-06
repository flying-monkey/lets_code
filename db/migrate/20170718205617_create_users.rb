class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :image_url, null: false, default: "https://res.cloudinary.com/flying-monkey/image/upload/v1500417413/profile_avatar_ytdmt7.jpg"
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :city_id

      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
