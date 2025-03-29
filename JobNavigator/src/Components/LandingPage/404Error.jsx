
import {Link} from 'react-router-dom'
const PageNotFound =()=>{
    return(
        <>
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 err-page">

                <img className="err-img" src="/error.jpeg" alt="" />
                <h1 className='err-h1'>OOPS!</h1>
                <p className='err-msg'>The page you are looking for either has been removed or not available! Click on the button to go back to home page.</p>
                <Link to="/">
                    <button className='nav-reg err-btn'>GO TO HOME</button>
                </Link>

            </div>
            <div className="col-sm-4"></div>
        </div>
        </>
    )
}
export default PageNotFound;
