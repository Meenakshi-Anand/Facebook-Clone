json.extract! post, :id, :author_id, :wall_id, :body, :created_at
json.author post.author
json.wall post.wall
json.comments do
  json.commentIds post.id
  post.comments.each { |comment| json.set! comment.id, comment }
end
