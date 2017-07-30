'use strict';

console.log('working');

var cartOrderUl = document.getElementById('cartOrders');
var orders = [];

var renderOrders = function() {
  for (var i = 0; i < orders.length; i++) {
    var liEl = document.createElement('li');
    var productEl = document.createElement('p');
    var fullNameEl = document.createElement('p');
    var addressEl = document.createElement('p');
    var phoneNumberEl = document.createElement('p');
    var creditCardEl = document.createElement('p');
    var removeBtn = document.createElement('button');

    productEl.textContent = 'Item: ' + orders[i].product;
    liEl.appendChild(productEl);

    fullNameEl.textContent = 'Customer: ' + orders[i].firstname + ' ' + orders[i].lastname;
    liEl.appendChild(fullNameEl);

    addressEl.innerHTML = 'Address: ' + orders[i].street + ' ' + orders[i].city + ' ' + orders[i].state + ', ' + orders[i].zipCode;
    liEl.appendChild(addressEl);

    phoneNumberEl.textContent = 'Phone Number: ' + orders[i].phonenumber;
    liEl.appendChild(phoneNumberEl);

    creditCardEl.textContent = 'CC: ' + orders[i].creditcard;
    liEl.appendChild(creditCardEl);

    removeBtn.innerHTML = '&#10005';
    liEl.appendChild(removeBtn);

    cartOrderUl.appendChild(liEl);
    console.log(i, 'times ran');
  }
};


if (localStorage.orderData) {
  console.log('data exist');
  orders = JSON.parse(localStorage.orderData);
  renderOrders();
} else {
  console.log('nothing in localStorage');
}

var removeItem = function(e) {
  orders.forEach(function() {

  });

  // cartOrderUl.removeChild(e.target.parentNode);
};

cartOrderUl.addEventListener('click', removeItem);
