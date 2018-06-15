class Post < ActiveRecord::Base
  validates :body, :author_id,:wall_id ,presence: true

  has_attached_file :photo, default_url: "missing-post.png"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  belongs_to :wall,
  foreign_key: :wall_id,
  primary_key: :id,
  class_name: :User

  belongs_to :author,
  class_name: :User,
  primary_key: :id,
  foreign_key: :author_id

  has_many :comments,
  class_name: :Comment,
  primary_key: :id,
  foreign_key: :post_id

 def self.find_posts_by_wall_id(id)
   Post.all.where("wall_id = id").order("created_at DESC")
 end

 def self.find_posts_of_friends(id)
   friend_ids = User.find(id).accepted_friends_ids

   friend_ids_string = "(#{friend_ids.join(', ')})"

   Post.where("author_id IN 'friend_ids_string'")+
   Post.where("wall_id IN 'friend_ids_string'")
 end
end
