'use strict';

var userForm = document.getElementById('orderForm');

var productNamesArr = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg',
  'breakfast.jpg', 'bubblegum.jpg',
  'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg',
  'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
  'scissors.jpg', 'shark.jpg', 'sweep.png',
  'tauntaun.jpg', 'unicorn.jpg', 'usb.gif',
  'water-can.jpg', 'wine-glass.jpg'
];

Product.all = [];
Order.all = []; // keep it safe

function Product(name) {
  this.source = 'img/' + name;
  this.id = name.split('.')[0];
  this.name = name.replace('-', ' ').split('.')[0];
  Product.all.push(this);
}

function Order(idNumber, product, quantity, firstname, lastname, street, city,
  state, zip, phonenumber, creditcard) {
  this.idNumber = idNumber;
  this.product = product;
  this.quantity = quantity;
  this.firstname = firstname;
  this.lastname = lastname;
  this.street = street;
  this.city = city;
  this.state = state;
  this.phonenumber = phonenumber;
  this.creditcard = creditcard;
  Order.all.push(this);
}


var randomNumber = function() {
  return Math.floor(Math.random() * 100000);
};

// Checks if there is local storage
if (localStorage.orderData) {
  console.log('data exist');
  Order.all = JSON.parse(localStorage.orderData);
} else {
  console.log('nothing in localStorage');
}

(function() {
  for (var i = 0; i < productNamesArr.length; i++) {
    new Product(productNamesArr[i]);
  }
})();

Order.submit = function(e) {
  e.preventDefault();
  var productName = e.target.productName.value;
  console.log(typeof productName);
  console.log('form submitted');
  //[e.target.selectedIndex].value;
  var idNnumber = randomNumber();
  var quantity = e.target.quantity.value;
  var firstname = e.target.firstname.value;
  var lastname = e.target.lastname.value;
  var streetAddress = e.target.streetAddress.value;
  var city = e.target.city.value;
  var state = e.target.state.value;
  var zipCode = e.target.zipCode.value;
  var phonenumber = e.target.phoneNumber.value;
  var creditcard = e.target.creditCard.value;

  new Order(idNnumber, productName, parseInt(quantity), firstname, lastname,
    streetAddress, city, state, zipCode, phonenumber, creditcard);

  localStorage.orderData = JSON.stringify(Order.all);
  userForm.reset();
};

userForm.addEventListener('submit', Order.submit);

console.log(Order.all);
