import { createSlice } from "@reduxjs/toolkit";






const cartSlice = createSlice({
    name : 'cart',



    initialState : {
        cartItems : [],
        totalPrice : 0
    },

    
    reducers : {





        addTocart : (states,perams)=>{

            const issameCourseExit = states.cartItems.some(e=>e.id === perams.payload.id)

            if(!issameCourseExit){
                states.cartItems = [...states.cartItems,{
                    id:perams.payload.id,
                    title:perams.payload.title,
                    price:perams.payload.price,
                    img:perams.payload.img_src,
                }]
            }

            if(states.cartItems.length > 0){
                let result = 0;
                states.cartItems.forEach(e=>{
                    result = result + Number(e.price.slice(1))
                })
                states.totalPrice = result.toFixed(2)
            }else{
                states.totalPrice = 0
            }
        },
        removeFromCart : (states,perams)=>{
            states.cartItems = states.cartItems.filter(e=>e.id != perams.payload.id)
            if(states.cartItems.length > 0){
                let result = 0;
                states.cartItems.forEach(e=>{
                    result = result + Number(e.price.slice(1))
                })
                states.totalPrice = result.toFixed(2)
            }else{
                states.totalPrice = 0
            }
        },


        




    }
})


export const {addTocart,removeFromCart,cartTotalPrice} = cartSlice.actions;


export default cartSlice.reducer;