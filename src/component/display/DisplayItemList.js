import React from 'react';
import data from '../../data/item.json';
import DisplayItem from './DisplayItem.js';
import { CartConsumer } from '../../store/CartProvider.js';

const DisplayItemList = ()=>{
    return (
        <div className="display-list-wrapper">
            <CartConsumer>
                {
                    ({state,actions}) =>{
                        return data.map((item,idx)=>{
                            return <DisplayItem item={item} key={`item-${idx}`} onAdd={actions.addItems}/>
                        });
                    }
                }
            </CartConsumer> 
            <style jsx>{`
                .display-list-wrapper{
                    flex : 1;
                    display : flex;
                    flex-direction : column;
                }
            `}</style>
        </div>
        
    );
}

export default DisplayItemList;