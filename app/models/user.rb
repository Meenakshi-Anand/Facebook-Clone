class User < ApplicationRecord
  validates :email,:session_token,uniqueness: true,presence: true
  validates :fname,:lname,:birthday,presence:true
  validates :password_digest,presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token

  has_attached_file :profile_image_url,default_url: 'female-default.jpg'
  validates_attachment_content_type :profile_image_url, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover_image_url,default_url: 'welcome.png'
  validates_attachment_content_type :cover_image_url, content_type: /\Aimage\/.*\Z/


  attr_reader :password


  has_many :requested_friendships,
    primary_key: :id,
    foreign_key: :requestor_id,
    class_name: :FriendRequest

  has_many :received_friendships,
    primary_key: :id,
    foreign_key: :approver_id,
    class_name: :FriendRequest

  has_many :requested_friends,
    through: :requested_friendships,
    source: :approver

  has_many :received_friends,
    through: :received_friendships,
    source: :requestor

  def all_friends
    self.requested_friends.concat( self.received_friends)
  end

  def outgoing_pending_friends
    self.requested_friends.where("approval_status = false")
  end

  def outgoing_pending_friends_ids
    outgoing_pending_friends
      .map { |friend| friend.id }
  end

  def incoming_pending_friends
    self.received_friends.where("approval_status = false")
  end

  def incoming_pending_friends_ids
    incoming_pending_friends
      .sort_by{ |friend| friend.created_at }
      .reverse
      .map { |friend| friend.id }
  end

  def accepted_friends
    self.requested_friends.where("approval_status = true") +
      self.received_friends.where("approval_status = true")
  end

  def accepted_friends_ids
    accepted_friends.map { |friend| friend.id }
  end

  def denied_friends
    self.requested_friends.where("approval_status = 'denied'") +
      self.received_friends.where("approval_status = 'denied'")
  end

  def friendship_status(other_user_id)
    FriendRequest.find_by(requestor_id: self.id, approver_id: other_user_id)&.status ||
    FriendRequest.find_by(requestor_id: other_user_id, approver_id: self.id)&.status
  end

  def self.searchNames(query)
  sql_query = "%" + query.downcase + "%"
  User
    .where('lower(fname) LIKE ? OR lower(lname) LIKE ?', sql_query, sql_query)
    .limit(8)
  end

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end
end
