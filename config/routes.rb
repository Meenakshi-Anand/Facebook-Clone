Rails.application.routes.draw do

  resources :friend_requests
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    get "users/search", to: "users#search"
    resources :users, only: [:index, :create, :show, :update] do
      resources :posts, only: [:create, :index]
      resources :friend_requests, only: [:index, :create]
    end

    resources :posts, except: [:new, :edit] do
      resources :comments, only: [:index, :create]
    end

    resource :session, only: [:create, :destroy]
    resources :comments, only: [:destroy]
    resources :friend_requests, only: [ :update, :destroy]

  end

  root "static_pages#root"

end
