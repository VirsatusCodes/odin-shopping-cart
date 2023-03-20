import './App.css';
import productList from './products/productList.js';
console.log(productList)

function App() {
  return (
    <div>
        {<img src={productList.item1.img} alt = 'deoderant'/>}
    </div>
  );
}

export default App;
