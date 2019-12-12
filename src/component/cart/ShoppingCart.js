import React,{useCallback, useState, useEffect, useContext} from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { Typography } from '@material-ui/core';
import { CartContext } from '../../store/Cart.context';

const ShoppingCart = () =>{    
    const {changeAllCheckFlag,checkAllFlag,getTotalPrice,cartItems} = useContext(CartContext); 
    const [allCheckFlag, setAllCheckFlag] = useState(checkAllFlag);
    console.log(cartItems)
    const onChangeCheckFlag = useCallback(() => {
        console.log('test')
        setAllCheckFlag(prev=>!prev);
        changeAllCheckFlag(!allCheckFlag)
    },[setAllCheckFlag,allCheckFlag,changeAllCheckFlag]);

    useEffect(()=>{
        setAllCheckFlag(checkAllFlag)
    },[checkAllFlag]);

    return(
        <div className="cart-list-wrapper">
            <Typography variant="h4">장바구니</Typography>
            <div className="cart-list-header">
                <span className="cart-header-wrapper">
                    <input type="checkbox" checked={allCheckFlag} onChange={onChangeCheckFlag}/> 
                </span>
                <Typography variant="h5" className="cart-header-wrapper">제품명</Typography>
                <Typography variant="h5" className="cart-header-wrapper">가격</Typography> 
                <Typography variant="h5" className="cart-header-wrapper">수량</Typography>  
                <Typography variant="h5" className="cart-header-wrapper">확인</Typography>              
            </div>
            <div>
                {
                    cartItems.map((item, idx)=>{
                        return <ShoppingCartItem item={item} key={`cart-${idx}`}/>
                    })
                }
            </div>
            <div className="price-wrapper"> 
                <Typography variant="h4" className="price-header-wrapper">총합</Typography>
                <Typography variant="h4" className="price-header-wrapper">{getTotalPrice()}</Typography>
            </div> 
            <style jsx>{`
                .cart-list-wrapper{
                    flex : 1;
                    border : 1px solid #000;
                }

                .cart-list-header{     
                    flex : 1;               
                    display : flex;
                    flex-direction : row;
                }

                .cart-header-wrapper{
                    flex : 1;
                }

                .price-header-wrapper{
                    flex : 1;                    
                    color : blue;
                }

                .price-wrapper{
                    flex : 1;               
                    display : flex;
                    flex-direction : row;
                }
            `}</style>              
        </div>
        
    )
}

export default ShoppingCart;