require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Team < ActiveRecord::Base
  belongs_to :league, :optional => true
end

class Plant < ActiveRecord::Base
  has_many :teams
end

# Home page......
get '/' do
  @laliga = Team.all
  erb :home
end

# Team details .........
get '/laliga/:id' do
  @team = Team.find params[:id]

  erb :team_view
end

# Create teams form......
get '/create' do
  erb :create
end

# Create teams results.....
post '/new_team' do
  team = Team.new
  team.name = params[:name]
  team.city = params[:city]
  team.stadium = params[:stadium]
  team.stadium_capacity = params[:stadium_capacity]
  team.last_rank = params[:last_rank]
  team.title = params[:title]
  team.logo = params[:logo]
  team.league_id = params[:league_id]
  team.save

  redirect to('/')
end

# Edit team.......
get '/laliga/:id/edit' do
  @team = query_db "SELECT * FROM laliga WHERE id='#{ params[:id] }'"
  @team = @team.first
  # @team.to_s
  erb :edit
end

post '/edit' do
  query = "UPDATE laliga SET name='#{params[:name]}', city='#{params[:city]}', stadium='#{params[:stadium]}', stadium_capacity='#{params[:stadium_capacity]}', last_rank='#{params[:last_rank]}', title='#{params[:title]}', logo='#{params[:logo]}' WHERE id='#{params[:id]}'"
  query_db query

  redirect to("/laliga/#{params[:id]}")
  # params.to_s
end



# Delete teams......
get '/laliga/:id/delete' do
  query_db "DELETE FROM laliga WHERE id=#{ params[:id] }"

  redirect to('/')
end

















def query_db(sql_command)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_command
  db.close
  results
end
