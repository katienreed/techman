Rails.application.routes.draw do
  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  root 'home#index'
  resources :users, only: [:create, :new]

  get 'profile/index'

  get "/game"=>"home#game"

  get "/profile"=>"profile#index"
end
