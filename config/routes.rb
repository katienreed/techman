Rails.application.routes.draw do
  root 'home#index'
  resources :users, only: [:create, :new]

  get 'profile/index'

  get "/game"=>"home#game"

  get "/profile"=>"profile#index"
end
