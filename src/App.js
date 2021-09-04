import {Route,BrowserRouter as Router, Redirect} from 'react-router-dom'
import React from 'react'
import './app.css'
import Carts from './components/Carts'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Navigations from './components/Navigations'
import Products from './components/Products'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { StateValue } from './DataContext'

const App = () => {
    const [{user}] = StateValue();

    return (
        <Router>
            <div className="app">
                {
                    user 
                    ?
                        <>
                            <Navbar/>
                            <Navigations/>
                        </> 
                    :
                        " "
                }
                
                <Route path = "/login" exact render = {()=>{
                    return(user === null ? <Login/> : <Redirect to="/"/>)
                }}/>

                <Route path = "/signup" exact render = {()=>{
                    return(user === null ? <SignUp/> : <Redirect to="/"/>)
                }}/>


                <Route path = "/" exact render = {()=>{
                    return(user ? <Home/>: <Redirect  to = "/login"/>)
                }}/>


                <Route path = "/carts" exact render = {()=>{
                    return(user ?<Carts/> : <Redirect  to = "/login"/>)
                }}/>

                <Route path = "/products/:category" exact render = {({match})=>{
                    return(user ?<Products category = {match.params}/> : <Redirect  to = "/login"/>)
                }}/>

                {/* <Route path = "/*" exact strict render = {()=>{
                    return(<h1>404 NOT FOUND</h1>)
                }}/> */}
                  
                
            </div>
        </Router>
        
    )
}

export default App
