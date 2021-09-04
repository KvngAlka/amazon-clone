import {  LocationOn } from '@material-ui/icons'
import React from 'react'
import './navigations.css'
import {StateValue} from '../DataContext'

const Navigations = () => {

    const [{user}] = StateValue()
    return (
        <div className = "navigations">
            <div className="navigations__left">
                <LocationOn/>
                <div>
                    <h5>Deliver to {user?.displayName}</h5>
                    <h4>Accra 00233</h4>
                </div>
            </div>

            <div className="navigations__right">
                <h4>Today's Deals</h4>
                <h4>Kingsford's Amazon.com</h4>
                <h4>Customer Service</h4>
                <h4>Browsing History</h4>
                <h4>Buy Again</h4>
                <h4>Gift Card</h4>
                <h4>Sell</h4>
                <h4>Registry</h4>
            </div>
            
        </div>
    )
}

export default Navigations
