'use strict';

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

function Order(product, quantity, customer, street, city,
  state, zip, phonenumber, creditcard) {
  this.product = product;
  this.quantity = quantity;
  this.customer = customer;
  this.street = street;
  this.city = city;
  this.state = state;
  this.phonenumber = phonenumber;
  this.creditcard = creditcard;
  Order.all.push(this);
}

new Customer(productNamesArr[1], '3', 'Bob Robertsonburgton',
  '123 Paper St.', 'Seattle', 'WA', '98122', '123-456-7890', '4400 1234 5678 9123');
