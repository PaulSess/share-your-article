Rails.application.routes.draw do
  resources :posts
  root to: "pages#home"
  # get 'pages', to: 'pages#about_us'
  get '/about', to: "pages#about"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
