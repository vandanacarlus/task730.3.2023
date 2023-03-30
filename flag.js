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
let copy = []
let fires = res.forEach(function(item){
     copy.push(`${item.name.common}, ${item.capital},${item.flag}`)

})
console.log(copy)}