# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(email:'Meenakshi',password:'password',fname:'Meenakshi',
                        lname:'Anand',sex:'F',birthday:'06-19-1990')
User.create!(email:'Anand',password:'password',fname:'Anand',
                        lname:'Narayan',sex:'F',birthday:'09-29-1989')
