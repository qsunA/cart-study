import React,{memo} from 'react';
import { Typography } from '@material-ui/core';

const ItemInfo = memo(({item})=>{
    console.log(item)
    return(
        <div className="item-info-wrapper">
            <img src={item.imgLink} alt={item.id} width="100" height="50"></img>
            <Typography variant="h6" className="typo">
                {item.name} 
            </Typography>
            <Typography variant="subtitle1" className="typo">
                {item.won}
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
});

export default ItemInfo;