import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutpage from "../Images/Aboutpage.jpg";

function About() {
    return (
        <div>
            <Navbar />
            <Footer />
            <>
                <div className='position-relative' style={{ marginBottom: "70px", marginTop: "0px" }}>
                    <img src={Aboutpage} alt="food"  style={{ filter: 'brightness(40%)' }} />
                    <div className='position-absolute d-flex justify-content-center align-items-center flex-column ' style={{ top: '0%',width:"100vw",height:"100vh" }} >
                        <div>
                            <h5 style={{ color: 'whitesmoke', fontFamily: 'cursive' }} className='fs-1 border border-5 py-2 px-3 my-5'>Invest in Your Health </h5>
                        </div>
                        <div className='d-flex text-white'>
                            <div  className="card mx-5 " style={{ width: '18rem',backgroundColor:"inherit" }}>
                                <div  className="card-body">
                                    <h5  className="card-title text-decoration-underline fw-bolder" style={{fontFamily : 'Shantell Sans'}}>Eat Healthy</h5>
                                    <p  className="card-text" style={{fontFamily : 'Shantell Sans'}}>Healthy foods are those that provide you with the nutrients you need to sustain your body's well-being and retain energy</p>
                                </div>
                            </div>
                            <div  className="card mx-3" style={{ width: '18rem',backgroundColor:"inherit" }}>
                                <div  className="card-body">
                                    <h5  className="card-title text-decoration-underline fw-bolder" style={{fontFamily : 'Shantell Sans'}}>Our Gols</h5>
                                    <p  className="card-text" style={{fontFamily : 'Shantell Sans'}}>customer smile's is our first priority. Customer satisfaction is our victory.  </p>
                                </div>
                            </div>
                            <div  className="card mx-3" style={{ width: '18rem',backgroundColor:"inherit" }}>
                                <div  className="card-body">
                                    <h5  className="card-title text-decoration-underline fw-bolder" style={{fontFamily : 'Shantell Sans'}}>our Food source.</h5>
                                    <p  className="card-text" style={{fontFamily : 'Shantell Sans'}}>Food castel, Food Fair, Sumi's Garden, Food Market, Dine & Wine , Habibi Kitchen, Ambrosia World, Olive Garden, Taste of the sun, Asian FoodFair.... </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>

    )
}

export default About
