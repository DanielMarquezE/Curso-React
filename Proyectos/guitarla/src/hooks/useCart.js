import {useState,useEffect} from 'react'
import {db} from '../data/db'
import { useMemo } from 'react'

export const useCart= ()=>{


    const initialCart = () =>{
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db)
    const [cart,setCart] = useState(initialCart)
 
    const MAX_ITEM=5
    const MIN_ITEM=1

    useEffect(() =>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    function addToCart(item){

        const itemExist= cart.findIndex(guitar => guitar.id === item.id)

        if(itemExist>=0){
            if(cart[itemExist].quantity==MAX_ITEM)return
            const updatedCard=[...cart]
            updatedCard[itemExist].quantity++
            setCart(updatedCard)
        }else{
            item.quantity=1
            setCart([...cart,item])
        }    
    }

    function removeFromCart(id){
        setCart(prevCart => prevCart.filter(guitar => guitar.id !==id))
    }

    function increaceQuantity(id){
        const updatedCart = cart.map( item =>{
            if(item.id===id && item.quantity < MAX_ITEM){
                return{
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decrementQuantity(id){
        const updatedCard= cart.map(item=>{
            if(item.id===id && item.quantity>MIN_ITEM){
                return{
                    ...item,
                    quantity: item.quantity-1
                }
            }
            return item
        })
        setCart(updatedCard)
    }

    function clearCart(){
        setCart([])
    }

    //State derivaro
    const isEmpty = useMemo(() => cart.length === 0, [cart])

    const cartTotal = useMemo(() => cart.reduce((total,item) => total + (item.quantity * item.price), 0),[cart])


    return {
       data,
       cart,
       addToCart,
       removeFromCart,
       decrementQuantity,
       increaceQuantity,
       clearCart,
       isEmpty,
       cartTotal
    }
}

