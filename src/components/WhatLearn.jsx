import { useState } from "react";

function WhatLearn() {


    const [seeMore,setSeeMore] = useState(true)
    const handleSeeMoreLess = ()=>{
        setSeeMore(!seeMore)
    }



    return (
        <section className="what-learn-section courses-see-more-button-section">
            <h3 className="description-common-title">What you will learn</h3>
            <ul className={`${seeMore && "add-see-more-effect"}`}>
                <li>Dinner sign bark range made someone manner bet half dark lying wrote ago good strength day noted arrow week market space terrible sea practice</li>
                <li>Office carried get political old press active gulf team speed nor than speak feet cast combination stage safety bottle simply pilot drop largest provide</li>
                <li>Jet stems congress shut said state rear kept title save foreign cloud review unless proper up accident shinning object best tool sitting flies strip</li>
                <li>Distance mistake outline tropical accident home swept gulf public entire seems swung heard whistle herself camera barn return third wood see partly night shore</li>
                <li>Nervous effect happily baby two husband or angry sunlight conversation brought attempt express feel quickly given spread answer thou meat wife rope shade sale</li>
                <li>Favorite bell until market corn mental pool tax jump fog floor contain owner structure old mind difficulty stuck straight fire usual aware curve victory</li>
                <li>Lost many century free desert unknown transportation chicken doing tie never catch gas dish interior pupil exact trail pie military hung tape ball it</li>
                <li>Guess whole buried vertical our brother choice save farther stopped do soon stove cap sum ill forest milk successful angry through proper six shorter</li>
            </ul>
            {
                seeMore ?
                <button onClick={handleSeeMoreLess} className="see-more-less course-see-more-button">See more</button>
                :
                <button onClick={handleSeeMoreLess} className="see-more-less course-see-less-button">See less</button>
            }
            
        </section>
    );
}

export default WhatLearn;
