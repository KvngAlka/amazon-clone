import { ADD__CART ,DELETE__ALL__CARTS,DELETE__CART, SET__USER} from "./constants"

export const initialState = {
    user : null,
    shoppingCarts : [
        
    ]

}

export const reducer =(state, action)=>{

    switch(action.type){
        case ADD__CART:
            return {
                ...state,
                shoppingCarts : [
                    ...state.shoppingCarts,
                    action.item
                ]

            }
        case DELETE__CART: 

            const newShoppingCarts = [...state.shoppingCarts];

            const index = state.shoppingCarts.findIndex(cartItem=> cartItem.id === action.id);

            if(index >= 0){
                newShoppingCarts.splice(index,1);

            }else{
                console.warn(`Can't remove cart with id : ${action.id}`)
            }
            return {
                ...state,
                shoppingCarts : newShoppingCarts
            }

        case DELETE__ALL__CARTS:
            return{
                ...state,
                shoppingCarts : [

                ]
            }

        case SET__USER : 
            return {
                ...state,
                user : action.user
            }
        default:
            return state;
    }

}