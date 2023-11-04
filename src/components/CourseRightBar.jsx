import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from "../features/cart/cartSlice";

/* eslint-disable react/prop-types */
function CourseRightBar({data}) {

    const {img_src,off,price,old_price,id,title} = data;

    const cartItems = useSelector(e=>e.cartSlice.cartItems)



    const [isAddedtoCart,setIsAddedtoCart] = useState(cartItems.some(e=>e.id === id))


    const [addToCartClicked,setAddToCartClicked] = useState(false) 

    const dispatch = useDispatch()


    const [scrollHeight,setScrollHeight] = useState(null);


    document.addEventListener('scroll',()=>{
        setScrollHeight(scrollY);
    })




    const handleCart = ()=>{
        dispatch(addTocart({id,title,price,img_src}))
        setAddToCartClicked(true)
        setIsAddedtoCart(false)
        setTimeout(()=>setIsAddedtoCart(true),2000)
    }





    return (
        <div className="courses-right-bar-wraper">
            <div className="courses-right-bar">
                <a href="#" className="courses-preview-img-wrap" >
                    <div className="courses-preview-img" style={{height: scrollHeight>=500 && '0px'}}>
                        <div className="shadow"></div>
                        <img src={img_src} alt="" className="img-fluid" />
                        <i className="fas fa-play"></i>
                        <p className="prev-text">Preview course</p>
                    </div>
                </a>

                <div className="courses-details">
                    <div className="new-courses-price">
                        <h3>{price}</h3>
                        <p className="cross">{old_price}</p>
                        <p className="off">{off}</p>
                    </div>
                    <div className="time-left-warn">
                        <i className="fas fa-stopwatch mr-1"></i> <b>10 hours</b> left at this price!
                    </div>

                    <div className="course-buy-buttons">
                        <button onClick={handleCart} className={`btn add-to-cart cart__button ${addToCartClicked && 'clicked'}`}>

                            {
                                isAddedtoCart ? 
                                'Added'
                                :
                                (
                                    <>
                                        <span className="add__to-cart">Add to cart</span>
                                        <span className="added">Added</span>
                                        <i className="fas fa-shopping-cart"></i>
                                        <i className="fas fa-heart"></i>
                                    </>
                                )
                            }
                        </button>
                        <button className="btn buy-now-btn">Buy now</button>
                        <p>30-Day Money-Back Guarantee</p>
                    </div>

                    <div className="courses-include">
                        <p className="title">This course includes:</p>
                        <p>
                            <i className="fas fa-desktop"></i> 3.5 hours on-demand video
                        </p>
                        <p>
                            <i className="far fa-file"></i> 1 article
                        </p>
                        <p>
                            <i className="fas fa-folder-plus"></i> 7 downloadable resources
                        </p>
                        <p>
                            <i className="fas fa-mobile-alt"></i> Access on mobile and TV
                        </p>
                        <p>
                            <i className="fas fa-infinity"></i> full time access
                        </p>
                        <p>
                            <i className="fas fa-trophy"></i> Certificate of completion
                        </p>
                    </div>

                    <div className="courses-footer-links">
                        <a href="#">Share</a>
                        <a href="#">Gift this course</a>
                        <a href="#">Apply cupon</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseRightBar;
