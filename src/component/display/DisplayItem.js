import React,{useCallback} from 'react';
import ItemInfo from '../common/ItemInfo';
import { Fab } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const DisplayItem = ({item, onAdd})=>{
    const onAddCart = useCallback(() => {
        onAdd(item);
    },[onAdd,item]);

    return(
        <div className="display-item-wrapper">
            <ItemInfo item={item} className="item-wrapper"/>
            <Fab aria-label="add" color="secondary" onClick={onAddCart} size="small" >
                <AddShoppingCartIcon />
            </Fab>
            <style jsx>{`
                .display-item-wrapper{
                    display : flex;
                    flex-direction : row;
                    flex : 1;
                }
            `}</style>
        </div>
    )
};

export default DisplayItem;