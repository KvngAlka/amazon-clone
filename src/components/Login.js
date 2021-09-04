import { Link, Redirect } from 'react-router-dom'
import React from 'react'
import './login.css'
import { useState, useEffect } from 'react'
import {StateValue} from '../DataContext'
import { SET__USER } from '../constants'
import { auth } from '../firebase'

const Login = () => {

    const [{user},dispatch]= StateValue();
     
    useEffect(() => {
        auth.onAuthStateChanged(user1 =>{
            dispatch({
                type : SET__USER,
                user : user1
            })
        })
    }, [dispatch])
    

    const obj = {
        email : "",
        password : ""
    }

    const [userInput, setUserInput] = useState(obj);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;

        setUserInput({
            ...userInput,
            [name] : value
        })

    }

    const handleLogin = async()=>{

        await auth.signInWithEmailAndPassword(userInput.email,userInput.password)
        .then(authUser=>{
            dispatch({
                type : SET__USER,
                user : authUser.user
            })
        })
        .catch(err=>alert(err.message))
        
    }

    return (
        user === null ?
        <div className = "login__page">
            <div className = "login">
                <img src="https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/10/amazon-logo.png?fit=1000%2C527" alt="amazonlogo" className="amazon__logo"/>
                <div className="login__box">
                    <h4 className="header">Sign-In</h4>
                    <input onChange = {handleInputChange} value = {userInput.email} name = "email"
                     type="email" className="login__input" placeholder = "email" />

                    <input onChange = {handleInputChange} value = {userInput.password} name = "password" 
                    type="password" className="login__input" placeholder = "password" />

                    <button onClick = {handleLogin} className="login__button">Continue</button>
                
                    <h6>
                        By continuing, you agree to Amazon's <span>Conditions 
                        of Use</span> and <span>Privacy Notice.</span>
                    </h6>
                    <h5> Need help?</h5> 
                </div>

                <p>New to Amazon?</p>

                <button>
                    <Link to = "/signup" className = "link">
                        Create your Amazon account
                    </Link>
                    
                </button>
            </div>


            <div className="footer">
                <footer>
                    <div>
                        <h5>Conditions of Use</h5>
                        <h5>Privacy Notice</h5>
                        <h5>Help</h5>
                    </div>
                    <div>
                        <h5 className = "end">1996 - 2020, Amazon.com, Inc or its affliates</h5>
                    </div>
                </footer>
            </div>
            
        </div>
        : 
        <Redirect to = "/"/>
    )
}

export default Login
