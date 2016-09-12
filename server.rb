require_relative "models/entry"
require 'sinatra'

get '/' do
  @entries = Entry.parse("public/entries")
  erb :index
end
