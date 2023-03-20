import React, {useState} from 'react';

function HomePage({productList}) {
  return (
    <div>
        {<img src={productList.item1.img} alt = 'deoderant'/>}
    </div>
  );
}

export default HomePage;
