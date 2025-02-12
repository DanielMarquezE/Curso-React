import { useMemo, useCallback, Dispatch } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/oder-reducer"

type OrderTotalProps={
    order: OrderItem[],
    tip : number,
    dispatch:  Dispatch<OrderActions>
}

export default function OrderTotal( {order, tip,dispatch} : OrderTotalProps) {

    const subTotalAmount= useMemo( () => order.reduce((total,item) => total + (item.quantity * item.price),0), [order])

    const tipAmount = useCallback( () => subTotalAmount*tip, [order,tip])
    
    const totalAmount = useMemo( () => subTotalAmount+tipAmount(), [order,tip])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas</h2>
            <p>Subtotal a Pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
            </p>
            <p>Propinas: {''}
                <span className="font-bold">{formatCurrency(tipAmount())}</span>
            </p>
            <p>Total a Pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>            
        </div>
        <button className="w-full bg-black p-3 uppercase text-white fount-bold mt-10 disabled:opacity-10" 
                disabled={totalAmount===0}
                onClick={ () => dispatch({type:'place-order'})}
                >Guardar Orden</button>
    </>
  )
}
