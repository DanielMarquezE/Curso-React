import { useMemo, useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps={
    order: OrderItem[],
    tip : number,
    placeOrder: () => void
}

export default function OrderTotal( {order, tip,placeOrder} : OrderTotalProps) {

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
                onClick={placeOrder}
                >Guardar Orden</button>
    </>
  )
}
