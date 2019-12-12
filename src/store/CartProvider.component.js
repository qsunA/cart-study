import React, { useState } from 'react';
import { CartContext } from './Cart.context';
import { gateway as MoltinGateway } from '@moltin/sdk';

const clientId = 'yrVXGA67JHPhqHbkkMgBwp1ZBg6kLk6NKbWfhmNbMJ';
const referenceId = '1885751072186696559';
const Moltin = MoltinGateway({ client_id: clientId });

const CartProvider = ({children}) =>{

    const addCartItems = (item)=>{
        console.log(item);
        // if(value.cartItems.findIndex(itm=>itm.id === item.id)<0){
        //     setValue(prev=>{
        //         return{
        //             ...prev,
        //             cartItems : [...prev.cartItems,
        //                 {...item,quantity : 1, checkFlag : true}
        //             ]
        //         }
        //     })
        // }else{
        //     setValue(prev=>{
        //         return{
        //             ...prev,
        //             cartItems : prev.cartItems.map(itm=>{
        //                 return itm.id === item.id ? {itm, quantity : itm.quantity+1} : itm;
        //             })
        //         }
        //     })
        // }

        Moltin
        .Cart(referenceId)
        .AddProduct(item.id, item.quantity)
        .then(cart => {
            getCartItem();
        });
            
            
    }

    const removeCartItems = (item) =>{
        setValue(prev=>{
            return{
                ...prev,
                cartItems : prev.cartItems.filter(itm=>itm.id !== item.name)
            }
        });

        Moltin.Cart(referenceId)
        .RemoveItem(item.product_id, item.quantity)
        .then(({ data }) => {

        });
    }

    const getTotalPrice = ()=>{
        let total = value.cartItems.reduce((ac,cur)=>{
            return ac + (cur["checkFlag"] ? cur["won"]*cur["quantity"] : 0);
        },0);

        return total;
    }

    const updateItem = (item,property,value) => {
        setValue(prev=>{
            return{
                ...prev,
                cartItems : prev.cartItems.map(itm=>{
                    return itm.name === item.name ? {...itm, property : itm[property]= value} : itm;
                })
            }
        })
    }

    const changeAllCheckFlagState = () =>{
        setValue(prev=>{
            return {
                ...prev,
                checkAllFlag : prev.cartItems.every(itm=> itm.checkFlag)
            }
        })
    }


    const getCartItem = () => {
        Moltin.Cart(referenceId)
        .Items()
        .then(({ data }) => {
            //state의 상태를 업데이트 해준다
            console.log(data);
            const list= setAddtionalData(data);
            setValue(prev=>{
                return{
                    ...prev,
                    cartItems : list,
                }
            })
        });
    }

    const setAddtionalData = (list) =>{
        const returnList = list.map(v=>{
            return{
                ...v ,
                imgLink : v.image.href,
                won : v.unit_price.amount,
                checkFlag : true
            };
        });
        return returnList;
    }


    const initialState = {
        cartItems : [],
        checkAllFlag : true,
        addCartItems,
        removeCartItems,
        getTotalPrice,
        updateItem,
        changeAllCheckFlagState
    };

    const [value, setValue] = useState(initialState);

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;