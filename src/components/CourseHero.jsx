/* eslint-disable react/prop-types */
import "../assets/css/coursehero.css";

function CourseHero({data}) {


    const {title,short_des,rating,author,students,updated} = data;




    return (
        <>
            <h2 className="course-title">{title}</h2>
            <p className="course-sub-title">{short_des}</p>
            <div className="course-rating">
                <div className="ratings">
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
                    (41 ratings)
                </a>
                <p className="count-student">{students}</p>
            </div>
            <p>
                Created by{" "}
                <a className="new-course-common-links" href="#">
                    {author}
                </a>
            </p>
            <div className="lang-infos">
                <p>
                    <i className="fas fa-globe mr-1"></i> {updated}
                </p>
                <p>
                    <i className="far fa-clock mr-1"></i> 6 Horas
                </p>
                <p>
                    <i className="fas fa-play mr-1"></i> 21 Videos
                </p>
            </div>

            <div className="small-screen-price-box">
                <p>$14.99</p>
                <button className="btn">Buy now</button>
            </div>
        </>
    );
}

export default CourseHero;
