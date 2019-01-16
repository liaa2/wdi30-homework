# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.destroy_all
Player.create(
  :name => "Ronaldo One",
  :nation => "Country One",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/100/100"
)

Player.create(
  :name => "Ronaldo Two",
  :nation => "Country Two",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/101/100"
)

Player.create(
  :name => "Ronaldo Three",
  :nation => "Country Three",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/101/101"
)

Player.create(
  :name => "Ronaldo Four",
  :nation => "Country Four",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/99/99"
)

Player.create(
  :name => "Ronaldo Five",
  :nation => "Country Five",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/100/101"
)

Player.create(
  :name => "Ronaldo Six",
  :nation => "Country Six",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/99/100"
)

Player.create(
  :name => "Ronaldo Seven",
  :nation => "Country Seven",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/102/100"
)

Player.create(
  :name => "Ronaldo Eight",
  :nation => "Country Eight",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/100/102"
)

Player.create(
  :name => "Ronaldo Nine",
  :nation => "Country Nine",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/98/100"
)

Player.create(
  :name => "Ronaldo Ten",
  :nation => "Country Ten",
  :position => "ST",
  :age => 27,
  :rating => 90,
  :image => "http://placekitten.com/100/100"
)

Team.destroy_all
Team.create(
  :name => "Real Madrid",
  :city => "My City",
  :stadium => "My Stadium",
  :title => 30,
  :image => "http://fillmurray.com/100/100"
)

Team.create(
  :name => "Real Madrid2",
  :city => "My City",
  :stadium => "My Stadium",
  :title => 30,
  :image => "http://fillmurray.com/100/100"
)

Team.create(
  :name => "Real Madrid3",
  :city => "My City",
  :stadium => "My Stadium",
  :title => 30,
  :image => "http://fillmurray.com/100/100"
)

Team.create(
  :name => "Real Madrid4",
  :city => "My City",
  :stadium => "My Stadium",
  :title => 30,
  :image => "http://fillmurray.com/100/100"
)

Team.create(
  :name => "Real Madrid5",
  :city => "My City",
  :stadium => "My Stadium",
  :title => 30,
  :image => "http://fillmurray.com/100/100"
)


Country.destroy_all
Country.create(
  :name => "England",
  :image => "/assets/england.png"
)

Country.create(
  :name => "England2",
  :image => "/assets/england.png"
)

Country.create(
  :name => "England3",
  :image => "/assets/england.png"
)

Country.create(
  :name => "England4",
  :image => "/assets/england.png"
)

Country.create(
  :name => "England5",
  :image => "/assets/england.png"
)
