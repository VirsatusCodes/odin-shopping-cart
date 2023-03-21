import {deoderant,
        couriers,
        penguin,
        toiletPaper} from './productImageCompilation'

import uniqid from 'uniqid'

const productList = {
  item1 : {
    name: 'Deoderant',
    price: 1.25,
    quantity: 1,
    img: deoderant,
    id: uniqid(),
  },
  item2 : {
    name: 'Couriers',
    price: 5,
    quantity: 1,
    img: couriers,
    id: uniqid(),
  },
  item3 : {
    name: 'Penguin',
    price: 5,
    quantity: 1,
    img: penguin,
    id: uniqid(),
  },
  item4 : {
    name: 'Toilet Paper',
    price: 10,
    quantity: 16,
    img: toiletPaper,
    id: uniqid(),
  },
}

export default productList