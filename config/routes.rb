Rails.application.routes.draw do

  resources :friend_requests
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    get "users/search", to: "users#search"
    get '/users/:id/wall', to: 'posts#wall_posts'
    get '/users/feed', to: 'posts#feed'
    resources :users, only: [:index, :create, :show, :update] do
      resources :friend_requests, only: [:index, :create,:update,:destroy]
    end

    resources :posts, except: [:new, :edit] do
      resources :comments, only: [:index, :create ,:destroy]
    end

    resource :session, only: [:create, :destroy]


  end

  root "static_pages#root"

end
