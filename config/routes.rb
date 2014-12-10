Rails.application.routes.draw do
  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  root 'home#index'

  get 'user/new'

  get 'user/create'

  get 'profile/index'

  get "/game"=>"home#game"

  get "/profile"=>"profile#index"
end
