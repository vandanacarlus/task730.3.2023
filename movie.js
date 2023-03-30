//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Moive{
    constructor (title, studio, rating){
this.title = title
this.studio = studio
this.rating = rating

    }
    res(){
        console.log(`The moive name is ${this.title}
             the studio is ${this.studio}
              and rating is ${this.rating}`)
    }
    }
    
    a1 = new Moive("Casino Royale", "Eon Productions", "PG13")
    a1.res()
