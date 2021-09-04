import { Link } from 'react-router-dom'
import React,{ useState, useEffect } from 'react'
import './signup.css'
import { auth } from '../firebase'
import { SET__USER } from '../constants'
import {StateValue} from '../DataContext'

const SignUp = () => {
    const [,dispatch] = StateValue();

    useEffect(() => {
        
        auth.onAuthStateChanged(user =>{
            dispatch({
                type : SET__USER,
                user : user
            })
        })
    }, [dispatch])
    

    const obj = {
        username : "",
        email : "",
        password : ""
    }

    const [userInput, setIserInput] = useState(obj);

    const handleChange = (e)=>{

        const {name, value} = e.target;

        setIserInput({
            ...userInput,
            [name] : value
        })
    }

    const handleSignUp = async()=>{
        await auth.createUserWithEmailAndPassword(userInput.email,userInput.password).then(async(authUser) =>{
            await authUser.user.updateProfile({
                displayName : userInput?.username
            })
            .catch(err => console.log(err))
            dispatch({
                type : SET__USER,
                user : authUser.user
            })
        }).catch(err=> alert(err.message))
    }

    return (
        <div>
            <div className = "signup">
                <img src="https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/10/amazon-logo.png?fit=1000%2C527" alt="amazonlogo" className="amazon__logo"/>
                <div className="signup__box">
                    <h4 className="header">Sign-Up</h4>
                    <input onChange = {handleChange} value = {userInput.username} name = "username" type = "text" className = "signup__input" placeholder = "username"/>
                    <input onChange = {handleChange} value = {userInput.email} name  = "email" type="email" className="signup__input" placeholder = "email" />
                    <input onChange = {handleChange} value = {userInput.password} name = "password" type="password" className="signup__input" placeholder = "password" />
                    <button  onClick = {handleSignUp} className="signup__button">Continue</button>
                
                    <h6>
                        By continuing, you agree to Amazon's <span>Conditions 
                        of Use</span> and <span>Privacy Notice.</span>
                    </h6>
                    <h5> Need help?</h5> 
                </div>

                <p>Already have an Amazon account?</p>

                <button>
                    <Link to = "/login" className = "link">
                        Sign into your Amazon account
                    </Link>
                    
                </button>
            </div>
        </div>
    )
}

export default SignUp
