import {deoderant,
        couriers,
        penguin,
        toiletPaper} from './productImageCompilation'

import uniqid from 'uniqid'

/* in larger lists or in general
alternate format could be the item name or id
is the title of the object and i could be able to access
it easier */

const productList = {
  item1 : {
    name: 'Deoderant',
    price: 1.25,
    quantity: 1,
    img: deoderant,
    id: 123,
  },
  item2 : {
    name: 'Couriers',
    price: 5,
    quantity: 1,
    img: couriers,
    id: 1234,
  },
  item3 : {
    name: 'Penguin',
    price: 5,
    quantity: 1,
    img: penguin,
    id: 12345,
  },
  item4 : {
    name: 'Toilet Paper',
    price: 10,
    quantity: 16,
    img: toiletPaper,
    id: 123455,
  },
}

export default productList