Rails.application.routes.draw do

  resources :sessions, only: [:new,:create,:destroy]

  root 'home#index'

  resources :users, only: [:create]

  get 'profile/index'

  get "/game"=>"home#game"

  get "/profile"=>"profile#index"
end
