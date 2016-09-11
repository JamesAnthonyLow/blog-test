require 'sinatra'

entry_names = Dir["public/entries/*"].map {|d| File.basename(d)}

p entry_names
get '/' do
  erb :index
end
