import Testimonials from 'react-testimonials';
function Testimonial() {

    const img1 = 'testimonial.png'; // Put the Image URLs
    const img2 = 'testimonial.png'; // Put the Image URLs
    const img3 = 'testimonial.png';
    const review1 = [img1, "Techpile", "Company", "Put the reviews here"];
    const review2 = [img2, "Techpile", "Company", "Put the reviews here"];
    const review3 = [img3, "Techpile", "Company", "Put the reviews here"];


    const items=[review1,review2,review3];

    return (<>
        <div className="row testimonial_outer" style={{marginTop:"100px"}} >
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row main_testimonial">
                <Testimonials items={items} />

                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
    </>)
}

export default Testimonial;