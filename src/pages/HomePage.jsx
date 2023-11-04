/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SingleCourseCard from "../components/SingleCourseCard";
import Header from "../components/Header";
import SkeletonCard from "../components/SkeletonCard";
import { Link } from "react-router-dom";
import Base from "./Base";

function HomePage() {

    const [isLoading,setIsLoading] = useState(true)

    const shuffleArray = (arr)=>{
        for(let i=arr.length-1; i>=0; i--){
            let j = Math.floor(Math.random()*i+1)
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }


    const URL = "https://ehmasuk.github.io/course/coursesData.js";
    const [allCourses,setAllCourses] = useState(null);

    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(
            data=>{
                setAllCourses(data)
                setIsLoading(false)
            }
        )

    },[])


    if (allCourses){
        shuffleArray(allCourses)
    }


    return (
        <>
            <Base>
                <div className="container py-5">
                    <div className="row">
                        {
                            isLoading && <SkeletonCard/>
                        }
                        {
                            allCourses && allCourses.map(
                                (e,i)=>{
                                    return (
                                        <Link key={i} to={`/course/${e.id}`} className="col-md-3 single-recom-common-card">
                                            <SingleCourseCard key={i} courseinfo={e} />
                                        </Link>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </Base>
        </>
    );
}

export default HomePage;
