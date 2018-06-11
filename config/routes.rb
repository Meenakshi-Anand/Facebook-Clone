Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do

    get "users/search", to: "users#search"
    resources :users, only: [:index,:create,:show,:update,:edit]
    resource :session, only: [:create,:destroy]
  end

  root "static_pages#root"

end
