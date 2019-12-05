import React, {createContext, Component} from 'react';
const {Provider, Consumer :CartConsumer} = createContext();

class CartProvider extends Component{
    state = {
        items : [],
        checkAllFlag : true
    }

    actions = {
        addItems : (item)=>{
            console.log(item);
            // 담기 
            if(this.state.items.findIndex(itm=>itm.name===item.name)<0){
                this.setState({items:[...this.state.items, {...item, quantity : 1, checkFlag : true}]});
            }else{
                this.setState({
                    items : this.state.items.map(itm=> {
                        return itm.name === item.name ? {...itm, quantity: itm.quantity+1} : itm
                    })
                });
            }            
        },

        removeItems : (item)=>{
            // 삭제
            this.setState({items : 
                this.state.items.filter(itm=>itm.name !== item.name)});
        },

        updateItemQuantity : (item,quantity) => {
            //수량 수정
            this.setState({
                items : this.state.items.map(itm=> {
                    return itm.name === item.name ? {...itm, quantity: quantity} : itm
                })
            });
        },

        getTotalPrice : () => {
            let total = this.state.items.reduce((ac,cur)=>{
                return ac + (cur["checkFlag"] ? cur["price"]*cur["quantity"] : 0);
            },0);
            return total;
        },

        changeAllCheckFlag : (checkFlag)=>{
            this.setState({
                items : this.state.items.map(itm=>{
                    return {...itm, checkFlag : checkFlag}
                })
            });
        },

        updateItemCheckFlag : (item) => {
            var me = this;
            this.setState({
                items : this.state.items.map(itm=>{
                    return itm.name === item.name ? {...itm, checkFlag: item.checkFlag} : itm;
                })
            },()=>{
                me.actions.changeAllCheckFlagState();
            });
        },

        changeAllCheckFlagState : () => {
            this.setState({
                checkAllFlag : this.state.items.every(itm=> itm.checkFlag)
            });
        }
    }
    render(){
        const {state, actions} = this;
        return(
            <Provider value={{state,actions}}>{this.props.children}</Provider>
        )
    }
}

export {CartProvider, CartConsumer};