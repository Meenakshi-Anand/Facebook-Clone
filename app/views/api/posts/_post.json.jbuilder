
json.extract! post, :id, :author_id, :wall_id, :body, :created_at
json.photo asset_path(post.photo.url)
json.author post.author
json.wall post.wall
if post.comments
  json.comments do
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comments', comment: comment
        json.authorid comment.author.id
        json.authorpic asset_path(comment.author.profile_image_url.url)
        json.authorf comment.author.fname
        json.authorl comment.author.lname
      end
    end
  end
end
