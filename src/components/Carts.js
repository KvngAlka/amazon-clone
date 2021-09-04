import { Star } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DELETE__ALL__CARTS, DELETE__CART } from '../constants'
import { StateValue } from '../DataContext'
import './carts.css'

const EBookCard = ()=>{
    return(
        <div className = "ebook__card">
            <div className = "eBook__img">
                <img src = {"https://images-na.ssl-images-amazon.com/images/I/91D5xAOAVjL.__BG0,0,0,0_FMpng_AC_UL135_SR89,135_.jpg"} alt = "img" />
            </div>
            <div className="ebook__card__right">
                <h4>A promise Land</h4>
                <h5>Barrack Obama</h5>
                <p>
                    <Star className = "star__rating"/>
                    <Star className = "star__rating"/>
                    <Star className = "star__rating"/>
                    <Star className = "star__rating"/>
                    <Star className = "star__rating"/>
                    182
                </p>
                <h5 className="edition">Kindle Edition</h5>
                <h4>{`$17.99`}</h4>
                <button>See all buying options</button>
            </div>
        </div>
    )
}

const CartTile = ({title,price,imgUrl, id})=>{

    const [,dispatch] = StateValue();

    //this will delete the item selected
    const handleDeletCart = ()=>{
        dispatch({
            type : DELETE__CART,
            id : id
        })
    }

    return(
        <div className="cart__tile">
            <div className="img__box">
                <img src = {imgUrl}  alt = "cart__img"/>
            </div>
            <div className="cart__tile__right">
                <h4 className="cart__title">{title}</h4>
                <h5 className="ranks"><span>#1 Best Seller</span> in the World</h5>
                <h5 className = "stock">In Stock</h5>
                <div className="del__cart" onClick = {handleDeletCart}>Delete</div>
            </div>
            <h3 className="cart__price">${price}</h3>

        </div>
    )
}

const Carts = () => {
    const history =  useHistory();

    const [state, dispatch] = StateValue();

    const [totalPrice,setTotalPrice] = useState(0.0) 

    useEffect(()=>{
        //total price is empty for the first start
        setTotalPrice(0);

        for(let i = 0; i < state.shoppingCarts.length; i++){

            setTotalPrice(
                totalP => (Math.fround(totalP + state.shoppingCarts[i].price))
            ) 
        }

        //rounding it to 3 decimal places
        setTotalPrice(tp => tp.toFixed(3))

    },[state.shoppingCarts.length,state.shoppingCarts])

    //this will empty the shopping basket
    const handleDeletAllCart = ()=>{
        dispatch({
            type : DELETE__ALL__CARTS
        })
    }


    return (
        <div className = "carts">
            <div className = "cart__left">
                {
                    state.shoppingCarts.length === 0 
                    ?
                        <>
                        <h4>Your Amazon Cart is empty</h4>
                        <p>
                            Your shopping cart lives to serve.Give it purpose - fill it with groceries
                            , clothing, household supplies, electronics, and more.
                            Continue shopping on the Amazon homepage
                        </p>
                        </>
                    :
                        <>
                        <div className="shopping__cart">
                            <h4 className="shopping__cart__title">Shopping Cart</h4>
                            <h5 className="subtitle" onClick = {handleDeletAllCart} style = {{cursor : "pointer", width : "fit-content"}}>Deselect all items</h5>
                        </div>
                        
                        {
                            state?.shoppingCarts.map((item)=>{
                                
                                return(
                                    <CartTile 
                                        key = {item.id}
                                        id = {item.id}
                                        imgUrl = {item.imgUrl}
                                        title = {item.title}
                                        price = {item.price}
                                    />
                                )
                            })
                        }

                        </>

                }

            </div>

            <div className = "cart__right">
                {
                    state.shoppingCarts.length !== 0 
                    ?
                    <div className="total__price">
                        <h4>Subtotal ({state.shoppingCarts.length} item): <strong>${totalPrice}</strong> </h4>

                        <div className = "check">
                            <input type="checkbox" />
                            <span>This order contains a gift</span>
                        </div>

                        <button onClick = {()=>{
                           //navigate to the previous page
                           history.goBack();
                        }}>
                            Proceed to checkout
                        </button>

                    </div>
                    :
                    ""

                }
                
                <h4>Best sellers in kindle eBooks</h4>
                <EBookCard/>
                <EBookCard/>
                <EBookCard/>
                <EBookCard/>
                <EBookCard/>
                <EBookCard/>
                <EBookCard/>
            </div>
            
        </div>
    )
}

export default Carts
