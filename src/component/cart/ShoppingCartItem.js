import React,{useState, useCallback, useEffect} from 'react';
import ItemInfo from '../common/ItemInfo';
import { Fab } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ShoppingCartItem = ({item, actions})=>{
    const [quantity, setQuantity] = useState(item.quantity);
    const [checkFlag, setCheckFlag] = useState(item.checkFlag);

    const onChangeQuantity = useCallback((e) => {
        setQuantity(e.target.value);
        actions.updateItemQuantity(item,e.target.value);
    },[actions, item]);
    
    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    useEffect(() => {
        setCheckFlag(item.checkFlag);
    }, [item.checkFlag]);

    const onRemoveBtnClick = useCallback(() => {
        actions.removeItems(item);
    },[actions,item]);

    const onChangeCheckBox = useCallback((e) => {
        setCheckFlag(prev=>!prev);
        actions.updateItemCheckFlag({...item,checkFlag:!checkFlag});
    },[actions,item,checkFlag]);

    return(
        <div className="cart-item-box">
            <input type="checkbox" onChange={onChangeCheckBox} checked={checkFlag}/>
                <ItemInfo item={item}/>
            <span>
                <input type="number" min="1" value={quantity} onChange={onChangeQuantity} /> 
            </span>
            <span>
                <Fab aria-label="add" color="secondary" onClick={onRemoveBtnClick} size="small" >
                    <DeleteForeverIcon />
                </Fab>
            </span>
            <style jsx>{`
                .cart-item-box{
                    display : flex;
                    flex-direction : row;
                    flex : 1;
                }
            `}</style>
        </div>
    )
}

export default ShoppingCartItem;