Rails.application.routes.draw do
  get 'comment/index'
  get 'comment/create'
  get 'comment/delete'
  devise_for :users
  resources :posts
  root to: "pages#home"
  # get 'pages', to: 'pages#about_us'
  get '/about', to: "pages#about"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
