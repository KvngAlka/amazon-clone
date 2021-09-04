import { Star } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import { accessories, amazonbasics, dealsandpromo, electronics, holidaydeals, startHolidays } from '../categoriesdata'
import { ADD__CART } from '../constants'
import { StateValue } from '../DataContext'
import './products.css'


const ProductCard = ({imgUrl,title,by, price, rates,id})=>{
    const [,dispatch] = StateValue();

    const handleAddToCart = ()=>{

        dispatch({
            type : ADD__CART,
            item : {
                imgUrl : imgUrl,
                title : title,
                by : by,
                price : price,
                id : id
            }
        })
    }

    return(
        <div className="product__card">
            
            <div className="product__img__box">
                <img src={imgUrl} alt="" className="product__img"/>
            </div>

            <h4 className = "title">{title}</h4>
            <h5 className = "by">by {by}</h5>
            <h5>Ships to Ghana</h5>
            <h3>${price}</h3>
            <div>
                {
                    Array(rates).fill().map((_)=>{
                       return <Star className = "star__rating"/>
                    })
                }
                
            </div>
            <p>More Buying Choices</p>
            <button onClick = {handleAddToCart}>Add to cart</button>

        </div>
    )
}



const Products = ({category}) => {

    const [productCategory,setProductCategory] = useState(electronics)

    useEffect(() => {
        switch(category.category){
            case "Electronics":
                setProductCategory(electronics)
                break;
            case "Computer & Accessories":
                setProductCategory(accessories)
                break;
            case "Amazon Basics":
                setProductCategory(amazonbasics)
                break;
            case "Promotion":
                setProductCategory(dealsandpromo)
                break;
            case "Holiday Deals":
                setProductCategory(holidaydeals)
                break;
            case "Start Holidays":
                setProductCategory(startHolidays)
                break;
            default:
                setProductCategory(electronics)
        }
        
    }, [category.category])

    return (
        <div className = "products">
            <div className="products__sidebar">
                <h4 className = "sidebar__title">Show results for</h4>
                <h5 className = "sidebar__subTitle">{category.category}</h5>
                <h5>Accessories and Supplies</h5>
                <h5>Camera  {`&`} Photo</h5>
                <h5>Car {`&`} Vehicle Electronics </h5>
                <h5>Home Audio</h5>
                <h5>Head Phones</h5>
                <h5>Office Electronics</h5>
                <h5>Service Plans</h5>
                <h5>Video Projectors</h5>
                <h5>Accessories</h5>
                <h5>Wearable Technology</h5>

            </div>


            <div className="products__right">
                <div className="right__top">
                    <h3>{category.category}</h3>

                </div>
                <div className="products__body">
                    
                    {
                        productCategory.map(item =>{
                            return(
                                <ProductCard
                                imgUrl = {item.imgUrl}
                                key = {item.id}
                                id = {item.id}
                                title = {item.title}
                                by = {item.by}
                                rates = {item.rate}
                                price = {item.price}
                                />
                            )
                        })
                    }
                    
                </div>

            </div>
            
        </div>
    )
}

export default Products
