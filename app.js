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

Order.all = []; // keep it safe

function Order(product, quantity, firstname, lastname, street, city,
  state, zip, phonenumber, creditcard) {
  this.product = product;
  this.quantity = quantity;
  this.firstname = firstname;
  this.lastname = lastname;
  this.address = street;
  this.city = city;
  this.state = state;
  this.phonenumber = phonenumber;
  this.creditcard = creditcard;
  Order.all.push(this);
}

// Checks if there is local storage
if (localStorage.customerData) {
  console.log('data exist');
  Order.all = JSON.parse(localStorage.customerData);
}

var dropdown = function(){

}

Order.submit = function(e) {
  e.preventDefault();

  var quantity = e.target.quantity.value;
  var firstname = e.target.firstname.value;
  var lastname = e.target.lastname.value;
  var streetAddress = e.target.streetAddress.value;
  var city = e.target.city.value;
  var state = e.target.state.value;
  var zipCode = e.target.zipCode.value;
  var phonenumber = '123-456-7890';
  var creditcard = '4400 1234 5678 9123';
  console.log(e.target.firstname.value);
  new Order(productNamesArr[1], parseInt(quantity), firstname, lastname,
    streetAddress, city, state, zipCode, phonenumber, creditcard);
  localStorage.orderData = JSON.stringify(Order.all);
  userForm.reset();
};

userForm.addEventListener('submit', Order.submit);
