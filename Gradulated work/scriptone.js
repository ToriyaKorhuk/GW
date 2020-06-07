const catalogProduct = [
    {
        id: 'id1',
        name: 'Серьги',
        img: './images/1_2.jpg/',
        price: 1
    },
    {
        id: 'id2',
        name: 'Кольцо',
        img: './images/1_1.jpg/',
        price: 4
    },
    {
        id: 'id3',
        name: 'Кольцо',
        img: './images/2_1.jpg/',
        price: 6
    },
    {
        id: 'id4',
        name: 'Кольцо',
        img: './images/2_2.jpg/',
        price: 1
    },
    {
        id: 'id5',
        name: 'Кольцо',
        img: './images/3_1.jpg/',
        price: 3
    },
    {
        id: 'id6',
        name: 'Кольцо',
        img: './images/4_2.jpg/',
        price: 2
    }
];

//Фильтр цены
var fprice = catalogProduct.filter(function(filterprice) {
    return filterprice.price < 3;
  });

  var fprice = catalogProduct.filter(filterprice => filterprice.price < 3);


  console.log(fprice);
  var fiprice = catalogProduct.filter(function(filterprice) {
    return filterprice.price < 2;
  });

  var fiprice = catalogProduct.filter(filterprice => filterprice.price < 2);
  console.log(fiprice);
//фильтр имени
var fname = catalogProduct.filter(function(filtername) {
    return filtername.name ==="Кольцо";
  });

  var fname = catalogProduct.filter(filtername => filtername.name ==="Кольцо");
  
console.log(fname);


  var finame = catalogProduct.filter(function(filtername) {
    return filtername.name ==="Серьги";
  });

  var finame = catalogProduct.filter(filtername => filtername.name ==="Серьги");
  console.log(finame);
  

  //document.getElementById(ser).onclick =  finame;
//  document.querySelector('ser').onclick = function(click) {
 //  innerHTML= "" + finame;
  //}
  
 //document.querySelectorAll("catalog"){
  // onclick= location.href='indexglobal.html';
 

