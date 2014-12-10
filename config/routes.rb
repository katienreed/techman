Rails.application.routes.draw do
  root 'home#index'

  get 'user/new'

  get 'user/create'

  get 'profile/index'

  get "/game"=>"home#game"

  get "/profile"=>"profile#index"
end
