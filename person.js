//Write a “person” class to hold all the details.

class   Person{
    
constructor(name,age,place){
    
    this.name = name
    this.age=age
    this.place =place

}
    res(){
        console.log(`My name is ${this.name} 
        age is ${this.age} and
         i am from ${this.place}`)
    
    }

}
a1 = new Person("vandana",10,"kolar")
a1.res()

// class   Person{
    

    
//     name ="vandana"
//     age ="10"
//     place = "kolar"
//     res(){
//         console.log( this. name+ " "+ this .age + " " +this. place)
    
//     }

// }
// a1 = new Person()
// // a1.res()