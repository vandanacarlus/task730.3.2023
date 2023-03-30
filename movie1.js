class Movie { 
     constructor(name) {
         this.name = name; } 
          getPG() 
          { return this.name; 
        }
         } 
         data = [{ 'movie' :"Casino Royale", 'rating': 'pg' }, {' movie': 'minions', 'rating': 'child' }] 
         s = new Movie(data) 
         console.log(s.getPG())