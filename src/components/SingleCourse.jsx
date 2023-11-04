import { useState } from "react";




function SingleCourse() {


    const [toggle,setToggle] = useState(false)

    const handleOpenClose = ()=>{
        setToggle(!toggle)
    }


    return (
        <div onClick={handleOpenClose} className={`single-courses-drawer ${toggle && "expended"} `}>
            <div className="drawer-title">
                <div className="main-title">
                    <i style={{transform: toggle && 'rotate(-180deg)'}} className="fas mr-2 fa-angle-down"></i> Introduction
                </div>
                <div className="time">10 lecture • 2 min</div>
            </div>
            <div className="drawer-body">
                <p>
                    <i className="fas fa-tv"></i> Conceptos básicos
                </p>
                <p>
                    <i className="fas fa-tv"></i> Conceptos básicos
                </p>
            </div>
        </div>
    );
}

export default SingleCourse;
