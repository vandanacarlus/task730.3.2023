var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all')
xhr.responseType ='json';
xhr.send();
xhr.onload= function(){
    var responseObj = xhr.response
    //console.log(responseObj)}
    let res= responseObj.filter(function (item){
       return item.continents =='Asia'
    })


//console.log(res)}
let fires = res.map(function(item){
    return item.population

})
//console.log(fires)}

let fire = fires.reduce(function(a,b){
    return a+b
})
console.log(fire)}
