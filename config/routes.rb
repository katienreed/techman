Rails.application.routes.draw do
  get 'profile/index'

  get 'home/index'

  get "/game"=>"game#index"

  get "/home"=>"home#index"

  get "/profile"=>"profile#index"
end
