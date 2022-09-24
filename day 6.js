1.// movie
class Movie{
    constructor(title, studio, rating="PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(Movie)
    {
        if(this.rating == "PG")
        {
            return Movie; 
        }
        else{
            return `No PG rated movie`
        }
    }
}

var movie = new Movie("Casino Royale", "Eon Productions", "PG13" )
console.log(movie)
console.log(movie.getPG("Casino Royale"))


// 2.write a class of a person to hold all details
class Person{
    constructor(name, city, age)
    {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    name()
    {
        return ` ${this.name}`
    }

    city()
    {
        return `lives in ${this.city}...`
    }
    age()
    {
        return `age ${this.age}...`
    }

}

var Manoj = new Person("manoj", "chennai", "25")
console.log(Manoj.name())
console.log(Manoj.city())
console.log(Manoj.age())

// 3.uber
class Uber{
    constructor(kmdriven,destination,amount)
    {
        this.kmdriven = kmdriven;
        this.destination = destination;
        this.amount = amount;
    }

    getAmount()
    {
        
        return `Charges for the ride is ${this.Amount}`
    }
}

const R1 = new Uber("30","chrompet","500")
console.log(R1.getAmount())
