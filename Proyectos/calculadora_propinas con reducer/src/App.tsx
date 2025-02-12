import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import OrderTotal from "./components/OrderTotal"
import TipPrecentageForm from "./components/TipPrecentageForm"
import { useReducer } from "react"
import { initianState, orderReducer } from "./reducers/oder-reducer"

function App() {

  const [state,dispatch] = useReducer(orderReducer, initianState)

  return (
    <>
    <header className="bg-teal-400 py-10">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>    
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
              {menuItems.map( item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                />
              ))}
          </div>          
        </div>
        <div className="boder border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          
          {state.order.length===0 ? (
            <p className="text-center">La orden esta vacia</p>
          ) : (
            <>
              <OrderContents 
                order={state.order}
                dispatch={dispatch}
              />
              <TipPrecentageForm 
                  dispatch={dispatch}
                  tip={state.tip}
              />
              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          )}          
        </div>
        </main> 
    </>
  )
}

export default App
