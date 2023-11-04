import { useState } from "react";

function CourseRatingSection() {



    const [seeMore,setSeeMore] = useState(true)
    const handleSeeMoreLess = ()=>{
        setSeeMore(!seeMore)
    }



    return (
        <section className="courses-rating-section courses-see-more-button-section" id="courses-ratings">
            <h3 className="description-common-title">Happy students</h3>

            <div className={`courses-rating-wraper ${seeMore && "add-see-more-effect"}`}>
                <div className="single-rating">
                    <div className="rating-header">
                        <p>hb</p>
                        <div>
                            <p className="rater-name" >Herbert Gibson</p>
                            <div>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>

                                <span className="month">10 month ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="rating-des">
                        <p>Este curso de escritura de libros fue fantástico. Aprendí mucho y ha mejorado enormemente mis habilidades de escritura. ¡Altamente recomendado!</p>
                    </div>
                </div>

                <div className="single-rating">
                    <div className="rating-header">
                        <p>df</p>
                        <div>
                            <p className="rater-name">Dominic Fox</p>
                            <div>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>

                                <span className="month">1 month ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="rating-des">
                        <p>equator deep flight eleven research took pair hurt group music frame another face rule column headed waste principal ancient depth fair surrounded inside title...</p>
                    </div>
                </div>

                <div className="single-rating">
                    <div className="rating-header">
                        <p>eh</p>
                        <div>
                            <p className="rater-name">Elizabeth Hampton</p>
                            <div>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>

                                <span className="month">2 month ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="rating-des">
                        <p>come weak practice copper escape equal chain arrive met soil suddenly feathers mass bush handsome speed movie wrote hospital balloon greatest river busy at...</p>
                    </div>
                </div>

                <div className="single-rating">
                    <div className="rating-header">
                        <p>sg</p>
                        <div>
                            <p className="rater-name">Shane Griffin</p>
                            <div>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>

                                <span className="month">5 month ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="rating-des">
                        <p>exercise branch try grow depend until from valuable getting silver particular zoo lie weather fair those national hair butter frozen yellow spring noon might...</p>
                    </div>
                </div>

                <div className="single-rating">
                    <div className="rating-header">
                        <p>fg</p>
                        <div>
                            <p className="rater-name">Francis Greer</p>
                            <div>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>

                                <span className="month">1 month ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="rating-des">
                        <p>tide left hat refused triangle circus customs crop together hungry ill ever stranger itself degree table riding wise chest expect bright keep north accident...</p>
                    </div>
                </div>
            </div>

            {
                seeMore ?
                <button onClick={handleSeeMoreLess} className="see-more-less course-see-more-button">See more</button>
                :
                <button onClick={handleSeeMoreLess} className="see-more-less course-see-less-button">See less</button>
            }
        </section>
    );
}

export default CourseRatingSection;
