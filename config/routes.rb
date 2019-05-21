Rails.application.routes.draw do
  root to: 'onepage#index'

  get 'onepage/index'
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
