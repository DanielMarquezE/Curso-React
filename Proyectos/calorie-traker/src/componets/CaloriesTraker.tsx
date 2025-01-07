import { useMemo } from "react"
import { Activity } from "../types"
import CaloriesDisplay from "./CaloriesDisplay"

type CaloriesTrakerProps={
  activities:Activity[]
}

export default function CaloriesTraker({activities} : CaloriesTrakerProps) {
  
  //contadores
  const caloriesCosumed = useMemo(() => activities.reduce(
    (total,activity) => 
      activity.category===1 ? total+activity.calories : total
      ,0
    ) ,[activities])

  const caloriesBurned = useMemo(() => activities.reduce(
    (total,activity) => 
      activity.category===2 ? total+activity.calories : total
      ,0
    ) ,[activities])

    const netCalories = useMemo( () => caloriesCosumed - caloriesBurned, [activities])

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
      <div className="flex felx-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriesDisplay
          calories={caloriesCosumed}
          text="Consumidas"
        />
        <CaloriesDisplay
          calories={caloriesBurned}
          text="Ejercicio"
        />
        <CaloriesDisplay
          calories={netCalories}
          text="Diferencia"
        />
      </div>        
    </>
  )
}
