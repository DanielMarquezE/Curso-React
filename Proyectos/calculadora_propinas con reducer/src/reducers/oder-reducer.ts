import { MenuItem, OrderItem } from "../types"


export type OrderActions=
{type:'add-Item', payload:{item:MenuItem}}|
{type:'remove-Item', payload:{id:MenuItem['id']}}|
{type:'place-order'}|
{type:"add-tip" , payload:{value:number}}


export type OrderState={
    order:OrderItem[],
    tip:number
}

export const initianState : OrderState = {
    order: [],
    tip:0
}

export const orderReducer = (
    state: OrderState = initianState,
    action: OrderActions
) => {

    if(action.type==='add-Item'){

        const itemExist = state.order.find(orderItem=>orderItem.id === action.payload.item.id)

        let order : OrderItem[]=[]

        if(itemExist){
            order= state.order.map( orderItem => orderItem.id === action.payload.item.id 
                ? {...orderItem, quantity:orderItem.quantity+1} 
                : orderItem
            )

        }else{
            const newItem : OrderItem={...action.payload.item,quantity:1}
            order=[...state.order,newItem]
        }   

        return {
            ...state,
            order
        }
    }
    if(action.type==='add-tip'){

        const tip=action.payload.value

        return{
            ...state,
            tip
        }
    }
    if(action.type==='place-order'){
        return{
            ...state,
            order:[],
            tip:0
        }
    }
    if(action.type==='remove-Item'){
        const order=state.order.filter(item => item.id !== action.payload.id)
        return{
            ...state,
            order
        }
    }

    return state
}