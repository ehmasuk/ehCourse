import SingleCourseCard from "./SingleCourseCard";


function CourseRecommandation() {
    return (
        <section className="recommendation-section">
            <h3 className="description-common-title">Recommendation for you</h3>
            <div className="row m-0 p-0">
            <SingleCourseCard colSize="col-lg-4" />
            </div>
        </section>
    );
}

export default CourseRecommandation;
