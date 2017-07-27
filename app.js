'use strict';

function Customer(product, quantity, customer, street, city,
  state, zip, phonenumber, creditcard) {
  this.product = product;
  this.quantity = quantity;
  this.customer = customer;
  this.street = street;
  this.city = city;
  this.state = state;
  this.phonenumber = phonenumber;
  this.creditcard = creditcard;

}


new Customer('ball', '3', 'Bob Robertsonburgton',
'123 Paper St.', 'Seattle','WA','98122', '123-456-7890', '4400 1234 5678 9123');
