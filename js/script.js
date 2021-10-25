"use strict"

const subscriptionOffers = document.querySelectorAll('.subscription__offers-item');

subscriptionOffers.forEach(offer => {
  offer.addEventListener('click', () => {
    subscriptionOffers.forEach(item => {
      item.classList.remove('subscription__offers-item--current');
    });
    offer.classList.add('subscription__offers-item--current');
  })
});
