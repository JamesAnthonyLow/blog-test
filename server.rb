require 'sinatra'

set :public_folder, 'public'

get '/' do
  redirect '/index.html'
end

get '/archive' do
  e_dir = "public/entries/"
  entries = Dir[e_dir+"*.html"].map do |e| 
    File.basename(e, ".html").gsub("_", " ")
  end
  entries.join("\n")
end
