//write a class to calculate the uber price.

// class   Price{

//     kilometer =1 
//         amount =50
    
//     multi(){
//         console.log( `uber price :${this. kilometer*this.amount}`)
    
//     }

// }
// a1 = new Price()
// a1.multi()



class   Price{
    constructor(rate,kilometer){

    this.rate=rate
    this.kilometer = kilometer
    console.log("uber price")
    }
    
    
    multi(){
        console.log( `uber price :${this. kilometer*this.rate}`)
    
    }

}
a1 = new Price(20,5.5)
a1.multi()
