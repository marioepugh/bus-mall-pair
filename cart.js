'use strict';

var userForm = document.getElementById('orderForm');


Product.all = [];
Order.all = [];

function Product(name) {
  this.source = 'img/' + name;
  this.id = name.split('.')[0];
  this.name = name.replace('-', ' ').split('.')[0];
  Product.all.push(this);
}

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
  var productName = e.target.value;
  productName = Product.all[1];
  var quantity = e.target.quantity.value;
  var firstname = e.target.firstname.value;
  var lastname = e.target.lastname.value;
  var streetAddress = e.target.streetAddress.value;
  var city = e.target.city.value;
  var state = e.target.state.value;
  var zipCode = e.target.zipCode.value;
  var phonenumber = '123-456-7890';
  var creditcard = '4400 1234 5678 9123';
  console.log('form submitted');
  new Order(productName, parseInt(quantity), firstname, lastname,
    streetAddress, city, state, zipCode, phonenumber, creditcard);

  // new Order(productName, quantity);

  localStorage.orderData = JSON.stringify(Order.all);
  // userForm.reset();
};



userForm.addEventListener('submit', Order.submit);


// userForm.addEventListener('change', function(e) {
//   console.log(e.target.value);
// });
