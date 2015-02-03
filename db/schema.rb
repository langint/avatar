# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150130092446) do

  create_table "avatars", force: true do |t|
    t.string  "image_name"
    t.string  "image_file"
    t.integer "users_id"
  end

  add_index "avatars", ["users_id"], name: "index_avatars_on_users_id", using: :btree

  create_table "avatars_users", id: false, force: true do |t|
    t.integer "user_id",   null: false
    t.integer "avatar_id", null: false
  end

  create_table "bios", force: true do |t|
    t.string  "bio"
    t.integer "user_id"
  end

  add_index "bios", ["user_id"], name: "index_bios_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "first_name",   limit: 30
    t.string   "city",         limit: 30
    t.string   "country",      limit: 30
    t.datetime "time_updated"
  end

end
