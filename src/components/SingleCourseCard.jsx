/* eslint-disable react/prop-types */
import "../assets/css/single-course-card.css";

function SingleCourseCard({ courseinfo }) {
    const { title, author, img_src, price, rating, ratings } = courseinfo;




    return (
        <>
            <div>
                <img src={img_src} alt="" className="recom-img" />
                <p className="recom-title">{title}</p>
                <p className="author">{author}</p>
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

                    <span>{ratings}</span>
                </div>
                <div className="infos">
                    <p>60 horas</p>
                    <p>20 lectures</p>
                    <p>Intermedio</p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <p className="price m-0">{price}</p>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </>
    );
}

export default SingleCourseCard;
