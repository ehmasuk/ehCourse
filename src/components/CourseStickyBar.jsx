/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/css/coursestickybar.css";

function CourseStickyBar({data}) {




    const { title,  price, rating, ratings } = data;

    const [scrollHeight,setScrollHeight] = useState(null);


    document.addEventListener('scroll',()=>{
        setScrollHeight(scrollY);
    })





    return (
        <div className="courses-sticky-bar" style={{display: scrollHeight>=500 && 'block'}}>
            <div className="courses-sticky-inner">
                <div className="desc">
                    <p className="desc-title">{title}</p>
                    <div className="course-rating">
                        <div className="ratings mb-0">
                        {rating}
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        {
                            Number(rating) === 5 && 
                                <>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                </>
                        }
                        {
                            Number(rating) >= 4.5 && Number(rating) <= 4.9 &&
                                <>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                </>
                        }
                        {
                            Number(rating) >= 4 && Number(rating) <= 4.4 &&
                                <>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                </>
                        }
                        {
                            Number(rating) < 4 && 
                                <>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                </>
                        }
                        </div>
                        <a className="new-course-common-links ml-2" href="#courses-ratings">
                            {ratings}
                        </a>
                        <p className="count-student">3,351 students</p>
                    </div>
                </div>
                <div className="price-box">
                    <p>{price}</p>
                    <button className="btn">Buy now</button>
                </div>
            </div>
        </div>
    );
}

export default CourseStickyBar;
