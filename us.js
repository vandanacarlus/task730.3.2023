

var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all')
xhr.responseType ='json';
xhr.send();
xhr.onload= function(){
    var responseObj = xhr.response
    let dol = responseObj.filter((item)=>{
      return item.currencies && item.currencies.USD
    })
    console.log(dol.map((item)=>{
      return item.name.common}))}
    // let usdol = dol.map((item)=>{
    //   return item.name.commom
    // })
    // console.log(usdol)}