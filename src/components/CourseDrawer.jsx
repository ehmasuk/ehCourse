import '../assets/css/coursedrawer.css'
import SingleCourse from './SingleCourse';

function CourseDrawer() {




    return (
        <section className="crurses-drawer-section">
            <h3 className="description-common-title">Course content</h3>
            <div className="courses-drawer-wraper">
                <p className="drawer-length">10 sections • 84 lectures • 3h 38m total length</p>
                <div className="courses-drawer-inner">


                    <SingleCourse />
                    <SingleCourse />
                    <SingleCourse />
                    <SingleCourse />

                </div>
            </div>
        </section>
    );
}

export default CourseDrawer;
