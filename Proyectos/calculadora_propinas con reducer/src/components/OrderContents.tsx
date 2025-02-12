import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/oder-reducer"
import { Dispatch } from "react"

type OrderContentsProps ={
  order : OrderItem[],
  dispatch : Dispatch<OrderActions>
}

export default function OrderContents({order, dispatch} : OrderContentsProps) {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>
      <div className="space-y-3 mt-5">
        {
          order.map(item=>(
            <div 
              key={item.id}
              className="flex justify-between items-center boder-t boder-gray-200 py-5 last-of-type: border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - { formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <div>
                <button
                  className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                  onClick={() => dispatch({type:'remove-Item', payload:{id:item.id}})}
                >
                  X
                </button>
              </div>              
            </div>
          ))
        }
      </div>
    </div>
  )
}
