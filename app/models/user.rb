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
