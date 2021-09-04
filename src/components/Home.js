import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const CategoryCard = ({caption , img, category})=>{
    return(
        <div className = "categories__card">
            <h4>{caption}</h4>
            <div className = "category__img">
                <img src={img} alt="cImg"/>
            </div>
            <Link to = {`/products/${category}`} className = "p">
                <p>Shop now</p>
            </Link>
            

        </div>
    )
}

const Home = () => {
    return (
        <div className = "home">
            <div className="large__image">
                <img src = {"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"} alt = "lImg"/>
            </div>
            <div className="body">
                <div className = "first__card">
                    <div className = "card__top">
                        <Avatar/>
                        <h4>Hi, Kingsford</h4>
                    </div>
                    <h6>Recommendation for you</h6>
                    <div className = "recommendations">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
                <CategoryCard 
                img = {"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"}
                caption = {`Deals & Promotions`}
                category = {"Promotion"}
                />

                <CategoryCard 
                img = {"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_Dash_HolidayDeals_1x._SY304_CB414581989_.jpg"}
                caption = {`Holiday Deals`}
                category = {"Holiday Deals"}
                />

                <CategoryCard 
                img = {"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"}
                caption = {`Start on your holiday list early`}
                category = {"Start Holidays"}
                />

                <CategoryCard 
                img = {"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"}
                caption = {`Electronics`}
                category = {"Electronics"}
                />

                <CategoryCard 
                img = {"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"}
                caption = {`Computer & Accessories`}
                category = {"Computer & Accessories"}
                />

                <CategoryCard 
                img = {"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"}
                caption = {`Amazon Basics`}
                category = {"Amazon Basics"}
                />
                
            </div>
            
        </div>
    )
}

export default Home
