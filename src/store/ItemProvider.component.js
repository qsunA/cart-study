import React, { createContext, useState, useEffect, useCallback } from 'react';
import { gateway as MoltinGateway } from '@moltin/sdk';

export const ItemContext = createContext();

const clientId = 'yrVXGA67JHPhqHbkkMgBwp1ZBg6kLk6NKbWfhmNbMJ';
const referenceId = '1885751072186696559';
const Moltin = MoltinGateway({ client_id: clientId });

const ItemProvider = ({children}) =>{

    useEffect(()=>{
        // Moltin.Cart(referenceId)
		// 	.Items()
		// 	.then(({ data }) => {
        //         //state의 상태를 업데이트 해준다
        //         console.log(data)
        //         setValue(()=>{
        //             return {
        //                 displayItems : data
        //             }
        //         })
        //     });

        let displayItems = [];
        let imgList = [];
        Moltin
		.Products
		.With('main_image')
		.All()
		.then((res) => {
            displayItems = res.data;
            imgList = res.included.main_images;
            let list = setImage(displayItems.slice(), imgList);
            setValue(()=>{
                console.log(list)
                return {displayItems : list}
            })
        });


        // setImage();
    },[]);

    const setImage = (displayItems,imgList)=>{
        let list = [];
        if(displayItems !==undefined && displayItems.length>0){
            list = displayItems.map(v=>{
                const id = v.relationships.main_image.data.id;
                const idx = imgList.findIndex(v=> {return v.id === id});
                return {...v, img : imgList[idx], imgLink : imgList[idx].link.href, won : v.price[0].amount}
            });
        }
        console.log(list)
        return list;
    };

    const initialState = {
        displayItems : []
    }

    const [value, setValue] = useState(initialState);
    console.log(value.displayItems)
    return(
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider;