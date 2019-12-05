import React from 'react';
import './App.css';
import DisplayItemList from './component/display/DisplayItemList';
import { CartProvider, CartConsumer } from './store/CartProvider';
import ShoppingCart from './component/cart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <DisplayItemList className="display-wrapper"/>
        <hr/>
        <CartConsumer>
          {
            ({state,actions})=>{
              return <ShoppingCart state={state} actions={actions} className="shopping-wrapper"/>
            }
          }
        </CartConsumer>        
      </CartProvider>      
    </div>
  );
}

export default App;
