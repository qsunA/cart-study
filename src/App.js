import React from 'react';
import './App.css';
import DisplayItemList from './component/display/DisplayItemList';
import ShoppingCart from './component/cart/ShoppingCart';
import CartProvider from './store/CartProvider.component';
import ItemProvider from './store/ItemProvider.component';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <CartProvider>
          <DisplayItemList className="display-wrapper"/>
          <ShoppingCart className="shopping-wrapper"/>
        </CartProvider>
      </ItemProvider>
      
      {/* <CartProvider>
        <DisplayItemList className="display-wrapper"/>
        <hr/>
        <CartConsumer>
          {
            ({state,actions})=>{
              return <ShoppingCart state={state} actions={actions} className="shopping-wrapper"/>
            }
          }
        </CartConsumer>        
      </CartProvider>       */}
    </div>
  );
}

export default App;
