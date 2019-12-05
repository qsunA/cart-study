import React from 'react';
import { Typography } from '@material-ui/core';

const ItemInfo = ({item})=>{
    return(
        <div className="item-info-wrapper">
            <Typography variant="h6" className="typo">
                {item.name} 
            </Typography>
            <Typography variant="subtitle1" className="typo">
                {item.price}
            </Typography>
            <style jsx>{`
                .item-info-wrapper{
                    display : flex;
                    flex-direction : row;
                    flex : 1;
                }

                .typo{
                    flex : 1;
                }
                
            `}</style>    
        </div>
    );
};

export default ItemInfo;