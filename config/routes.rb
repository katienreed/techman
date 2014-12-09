Rails.application.routes.draw do
  get 'home/index'

  get "/game"=>"game#index"

  get "/home"=>"home#index"
end
