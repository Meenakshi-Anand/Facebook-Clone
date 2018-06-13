# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_13_073108) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "author_id", null: false
    t.text "body", null: false
    t.integer "post_id", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
  end

  create_table "friend_requests", force: :cascade do |t|
    t.integer "requestor_id", null: false
    t.integer "approver_id", null: false
    t.string "approval_status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["requestor_id", "approver_id"], name: "index_friend_requests_on_requestor_id_and_approver_id", unique: true
  end

  create_table "posts", force: :cascade do |t|
    t.integer "author_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo_file_name"
    t.string "photo_content_type"
    t.integer "photo_file_size"
    t.datetime "photo_updated_at"
    t.integer "wall_id", null: false
    t.index ["author_id"], name: "index_posts_on_author_id"
    t.index ["wall_id"], name: "index_posts_on_wall_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "email", null: false
    t.string "sex"
    t.text "bio"
    t.datetime "birthday", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_image_url_file_name"
    t.string "profile_image_url_content_type"
    t.integer "profile_image_url_file_size"
    t.datetime "profile_image_url_updated_at"
    t.string "cover_image_url_file_name"
    t.string "cover_image_url_content_type"
    t.integer "cover_image_url_file_size"
    t.datetime "cover_image_url_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
