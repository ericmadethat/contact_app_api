# Homepage (Root path)
require "sinatra/json"
get '/' do
  erb :index
end

#API Endpoints list
# Adding contact
# Searching contact
# List contact
# View a contact
# Deleting a contact

get '/contacts' do
	@contacts = Contact.all
	json @contacts
	# supply json data
	# display a list of all contacts
end

get '/contacts/new' do
	# returns an html form to create a new contact
end

post '/contacts' do
	Contact.create(firstname: params[:firstname], lastname: params[:lastname], email: params[:email], phone_number: params[:phone_number])
	redirect '/'
	# creates a new contact via POST
end

get '/contacts/:id' do
	# displays a specific contact
end

delete '/contacts/:id' do
	# deletes a specific contact
end

