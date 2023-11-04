import { useParams } from "react-router-dom";
import CourseDrawer from "../components/CourseDrawer";
import CourseHero from "../components/CourseHero";
import CourseRatingSection from "../components/CourseRatingSection";
import CourseRecommandation from "../components/CourseRecommandation";
import CourseRightBar from "../components/CourseRightBar";
import CourseStickyBar from "../components/CourseStickyBar";
import DescriptionSection from "../components/DescriptionSection";
import InstructorSection from "../components/InstructorSection";
import PointsSection from "../components/PointsSection";
import WhatLearn from "../components/WhatLearn";
import Base from "./Base";
import { useEffect, useState } from "react";
import Notfound from "../components/Notfound";
import SkeletonCard from "../components/SkeletonCard";

export default function CourseInner() {
const {courseId} = useParams()


const URL = "https://ehmasuk.github.io/course/coursesData.js";
const [allCourses,setAllCourses] = useState(null);
const [isLoading,setIsLoading] = useState(true);
const [theCourse,setTheCourse] = useState(null);

useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(
        data=>{
            setAllCourses(data)
        }
    )

},[])

useEffect(()=>{
    if(allCourses){
        setTheCourse(allCourses.filter(e=>e.id === Number(courseId))[0])
        setIsLoading(false)
    }
},[allCourses,courseId])




const [carItems,setCartItems] = useState([
    {
        id:2,
        title:'lorem1',
        price:'40'
    },
    {
        id:3,
        title:'lorem2',
        price:'20'
    },
    {
        id:4,
        title:'lorem3',
        price:'30'
    }
])












    return (
        <Base carItems={carItems} setCartItems={setCartItems}>
            {
                theCourse && (
                        <div className="new-courses-details-page">
                            <div className="top-hero-section container-fluid">
                                {
                                    theCourse && <CourseStickyBar data={theCourse} />
                                }
                                <div className="courses-small-device-image">
                                    <div className="courses-small-preview-img">
                                        <div className="shadow"></div>
                                        <img src="https://escuela-ray-bolivar-sosa.com/storage/uploads/1688455109-jovin-kallis-zqb2latmpwc-unsplash-1.jpg" alt="" className="img-fluid" />
                                        <i className="fas fa-play"></i>
                                        <p className="prev-text">Preview course</p>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="col-lg-8">
                                        {
                                            theCourse && <CourseHero data={theCourse} />
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="new-courses-left-side">
                                <div className="container">
                                    <div className="col-lg-8">
                                        <WhatLearn />
                                        <CourseDrawer />
                                        <PointsSection />
                                        <DescriptionSection />
                                        <PointsSection />
                                        {
                                            theCourse && <InstructorSection data={theCourse} />
                                        }
                                        
                                        <CourseRatingSection />
                                    </div>
                                </div>
                            </div>
                            {
                                theCourse && <CourseRightBar data={theCourse} carItems={carItems} setCartItems={setCartItems} />
                            }
                            
                        </div>
                        )
            }
            {
                isLoading && <SkeletonCard/>
            }
            {
                !theCourse && <Notfound header={false} />
            }
        </Base>
        
    );
}
