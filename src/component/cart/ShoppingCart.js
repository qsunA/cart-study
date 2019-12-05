import React,{useCallback, useState, useEffect} from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { Typography } from '@material-ui/core';

const ShoppingCart = ({state,actions}) =>{
    const [checkAllFlag, setCheckAllFlag] = useState(state.checkAllFlag);

    const onChangeCheckFlag = useCallback(() => {
        console.log('test')
        setCheckAllFlag(prev=>!prev);
        actions.changeAllCheckFlag(!checkAllFlag)
    },[actions,setCheckAllFlag,checkAllFlag]);

    useEffect(()=>{
        setCheckAllFlag(state.checkAllFlag)
    },[state.checkAllFlag]);

    return(
        <div className="cart-list-wrapper">
            <Typography variant="h4">장바구니</Typography>
            <div className="cart-list-header">
                <span className="cart-header-wrapper">
                    <input type="checkbox" checked={checkAllFlag} onChange={onChangeCheckFlag}/> 
                </span>
                <Typography variant="h5" className="cart-header-wrapper">제품명</Typography>
                <Typography variant="h5" className="cart-header-wrapper">가격</Typography> 
                <Typography variant="h5" className="cart-header-wrapper">수량</Typography>  
                <Typography variant="h5" className="cart-header-wrapper">확인</Typography>              
            </div>
            <div>
                {
                    state.items.map((item, idx)=>{
                        return <ShoppingCartItem item={item} key={`cart-${idx}`} actions = {actions}/>
                    })
                }
            </div>
            <div className="price-wrapper"> 
                <Typography variant="h4" className="price-header-wrapper">총합</Typography>
                <Typography variant="h4" className="price-header-wrapper">{actions.getTotalPrice()}</Typography>
            </div> 
            <style jsx>{`
                .cart-list-wrapper{
                    flex : 1;
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