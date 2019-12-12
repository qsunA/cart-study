import React, { useContext } from 'react';
import DisplayItem from './DisplayItem.js';
import { ItemContext } from '../../store/ItemProvider.component.js';

const DisplayItemList = ()=>{
    const {displayItems} = useContext(ItemContext);
    return (
        <div className="display-list-wrapper">
            {
                displayItems.map((item,idx)=>{
                    return <DisplayItem item={item} key={`item-${idx}`}  />
                })
            }
            {/* <CartConsumer>
                {
                    ({state,actions}) =>{
                        return data.map((item,idx)=>{
                            return <DisplayItem item={item} key={`item-${idx}`} onAdd={actions.addItems}/>
                        });
                    }
                }
            </CartConsumer>  */}
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