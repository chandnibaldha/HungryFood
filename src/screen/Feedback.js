import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Feedback() {
 const [feedback,SetFeedback] = useState({
    name : '',
    email :'',
    cmt :'',
    happy :'',
    smaile :'',
    tear : '',
    angry :'',
 });
 // eslint-disable-next-line
 const [Data,setData] = useState(true);

 const handalchange=(event)=>{
    SetFeedback({...Feedback,[event.target.name]: event.target.value})
 };

 const handalclick=()=>{
    //setData([...Data,feedback]);
    SetFeedback({
     name : '',
    email :'',
    cmt :'',
    happy :'',
    smaile :'',
    tear : '',
    angry :'',
    })
    console.log(Data);
 }


  return (
    <div>
      <Navbar />
      <Footer />
      <>
        <div
          className="position-relative"
          style={{ marginBottom: "0px", marginTop: "0px" }}
        >
          <img
            src="https://source.unsplash.com/random/100×400?feedback"
            className="d-block w-100"
            alt="..."
            style={{
              filter: "brightness(80%)",
              height: "100vh",
              minHeight: "110vh",
              width: "100vw",
              minWidth: "100vw",
            }}
          />
        </div>
        <div
           className="position-absolute d-flex justify-content-start align-items-center flex-column mx-auto "
          style={{ top: "15%", width: "100vw", height: "100vh" }}
        >
          <div  className="row">
            <div  className="col-md-12">
              <h2 className="text-light my-4 text-center"style={{fontFamily:'cursive'}}>Feedback Form</h2>
             
                <div  className="form-group">
                  <input
                    type="text"
                     className="form-control "
                    style={{width : '50rem'}}
                    value={feedback.name}
                    onChange={handalchange}
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div  className="form-group my-2">
                  
                  <input
                    type="email"
                     className="form-control"
                   value={feedback.email}
                   onChange={handalchange}
                    placeholder="Email-Id"
                    name="email"
                    required
                  />
                </div>
                
                <div  className="form-group">
                  <textarea
                     className="form-control"
                    value={feedback.cmt}
                    onChange={handalchange}
                    name="cmt"
                    rows="5"
                    placeholder="Comment"
                    required
                  ></textarea>
                </div>
                <div  className="form-group">
                  <div  className="rating" >
                  <i  className="fa-solid fa-face-grin-stars fa-2x my-2 mx-3 " style={{color:'yellow',cursor :'pointer'}} value={feedback.happy} name='happy' onChange={handalchange} ></i>
                  <i  className="fa-solid fa-face-smile fa-2x mx-3" style={{color:'yellow',cursor :'pointer'}}value={feedback.smaile} name='smaile' onChange={handalchange} ></i>
                  <i  className="fa-solid fa-face-sad-tear fa-2x mx-3" style={{color : 'yellow',cursor :'pointer'}} value={feedback.tear} name='tear'onChange={handalchange}></i>
                  <i  className="fa-solid fa-face-angry fa-2x mx-3" style={{color : 'orange',cursor :'pointer'}}value={feedback.angry} name='angry' onChange={handalchange}></i>
                  </div>
                </div>
                <button type="submit"  className="btn btn-success py-2 my-2  " onClick={handalclick}>
                  Submit
                </button>
              
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Feedback;
