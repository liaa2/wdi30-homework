require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
get '/' do
  erb :home
end

get '/search' do
  @title_book = params[:title_of_book]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title_book }"
  info=HTTParty.get url

  @image_book=info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :search

end
