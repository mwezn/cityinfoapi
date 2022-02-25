//Isabels park data for different UK cities
class Park {
   constructor(city, name) {
      this.city = city
      this.name = name
   }
}


let parks=[
   new Park('London', 'Hyde Park'),
   new Park('Coventry', 'Memorial park'),
   new Park('Birmingham', 'Cannon hill park'),
   new Park('Bristol', 'Castle Park'),
   new Park("London", "The Regent's Park"),
   new Park('London', 'Victoria Park'),
   new Park('London', 'Kensington Gardens')
]

class Cinema {
   constructor(city, name) {
      this.city = city
      this.name = name
   }
}


let cinemas= [
   new Cinema("London","Cineworld Leicester Square"),
   new Cinema("London","Curzon Mayfair"),
   new Cinema("London","ODEON Covent Garden"),
   new Cinema("Bristol","Vue Cinema Bristol"),
   new Cinema("Birmingham","Piccadilly Cinema"),
   new Cinema("Oxford","Phoenix Picturehouse"),
   new Cinema("York","City Screen Picturehouse"),

]

class City {
    constructor(city,population){
        this.city=city;
        this.population=population
    }
}

let cities=[ 
new City("London",10000000), 
new City("Birmingham",2000000), 
new City("Manchester",1000000),
new City("Edinburgh",400000 ),
new City("Coventry",300000)]



module.exports = { cinemas, cities, parks}
