function InstructorSection({data}) {


    const {author,author_img_src,students} = data;


    return (
        <section className="instructor-section">
            <h3 className="description-common-title">Instructor</h3>
            <a href="#" className="ins-name">
                {author}
            </a>
            <p className="ins-tag">Author</p>
            <div className="ins-info">
                <div>
                    <img src={author_img_src} alt="" />
                </div>
                <div className="icon-text">
                    <p><i className="fas fa-star"></i> 4.5 Instructor Rating</p>
                    <p><i className="fas fa-award"></i> 21,522 Reviews</p>
                    <p><i className="fas fa-users"></i> {students}</p>
                    <p><i className="fas fa-play-circle"></i> 20 Courses</p>
                </div>
            </div>
            <div className="ins-des">
                <p>
                    <b>{author}</b> es una empresa de informática especializa en software, con personal titulado en Ingeniería Informática con más de 20 años de experiencia en el desarrollo de
                    software.
                </p>
            </div>
        </section>
    );
}

export default InstructorSection;
