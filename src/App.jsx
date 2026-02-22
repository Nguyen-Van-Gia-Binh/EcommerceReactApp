// App.js
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import './App.css'
const App = () => {
  return (

    <div className="app">
      <h1 className="app-heading">E-Commerce Application</h1>
      <div className="app-content">
        <ProductList />
        <ShoppingCart />
      </div>
    </div>


  );
};

export default App;
