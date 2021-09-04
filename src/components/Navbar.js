
import { Menu, Search, ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import amazonIcon from '../amazonicon.png'
import { StateValue } from '../DataContext'
import { auth } from '../firebase'
import { SET__USER } from '../constants'

const Navbar = () => {
    const [state, dispatch] = StateValue();

    const handleLogout = async()=>{
        await auth.signOut().catch(err=>alert(err.message));
        dispatch({
            type : SET__USER,
            user : null
        })
    }
    return (
        <div className = "navbar">
            <Menu className = "menu__icon"/>
            <Link to = "/">
                <img src={amazonIcon} alt="amzon__icon" className = "amazon__icon"/>
            </Link>
            
            
            <div className="navbar__search">
                <input type = "text" />
                <Search className = "navbar__search__icon"/>
            </div>

            <div className = "navbar__right">
                <h5>Hello, {state?.user.displayName}</h5>
                <h4>Account {"&"} Lists</h4>
            </div>
            <div className = "navbar__right">
                <h5>Returns</h5>
                <h4>{"&"} Orders</h4>
            </div>
            <div className = "navbar__right" style = {{cursor : "pointer"}} onClick = {handleLogout}>
                <h5>Account</h5>
                <h4>Logout</h4>
            </div>

            <div className = "navbar__right__last">
                <Link className = "link" to = "/carts">
                    <ShoppingBasket/>
                    <h4>{state.shoppingCarts.length}</h4>
                </Link>
            </div>
            
        </div>
    )
}

export default Navbar
