import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input } from 'antd'

function ContactUs() {
    const [quote,setQuote] = useState({});
    const [page,setPage] = useState({
        emailId : '',
        mobilNo : '',
        msg : '',
    });
    const [isSubmit, setIsSubmit] = useState(true);
    const [errors, setErrors] = useState({});

     const quoteAPI = async ()=>{
        const count = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
        const response = await fetch("http://type.fit/api/quotes");
        const quotesAll = await response.json();
        setQuote(quotesAll[count]);
     };
    useEffect(()=>{
    quoteAPI();
    },[]);

  const handalchange=(event)=>{
    setPage({...page,[event.target.name]:event.target.value})
  };  
  
  const handalclick=()=>{
  //  console.log('vhgvhg',page);
  setPage({
    emailId : '',
    mobilNo : '',
    msg : '',
  })
  };
  const validationFunction = (data) => {
    let error = {};
    //Email validation
    if (!data.emailId) {
      error.emailId = "Email is required";
      setIsSubmit(false);
    }
    //Password validation
    if (!data.mobilNo) {
      error.mobilNo = "Password is required";
      setIsSubmit(false);
    } else if (data.mobilNo && data.emailId) {
      setIsSubmit(true);
    }
    return error;
  };
  useEffect(() => {
    setErrors(validationFunction(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

 
    return (
        <div>
            <Navbar />
            <Footer />

            <>
             <div className='position-relative'  style={{ marginBottom: "0px", marginTop: "0px" }}>
             <img
              src="https://source.unsplash.com/random/100×400?food"
              className="d-block w-100"
              alt="..."
              style={{  filter: "brightness(30%)",height : '100vh',minHeight : '110vh',width : '100vw',minWidth : '100vw' }}
            />
              <div className='position-absolute d-flex justify-content-start align-items-center flex-column'style={{top : '13%',width:"100vw",height:"100vh"}} >
              <h5 style={{ color: 'whitesmoke', fontFamily: 'cursive' }} className='fs-1 border border-5 py-2 px-3 my-4'> Contact-Us</h5>
                <div style={{width : '30vw'}} className = 'text-white text-center fst-italic'>
                  {quote.length===0?"":quote.text}
                </div>
                 <div className='mb-2 mt-4' style={{width : '30vw'}}>
                 <Input placeholder="Email-Id" value={page.emailId} name = 'emailId' onChange={handalchange} />
                 <div className="text-danger">{errors.emailId}</div>
                 <Input placeholder="Mobil-No" className='my-2' value={page.mobilNo} name = 'mobilNo' onChange={handalchange} />
                 <div className="text-danger">{errors.mobilNo}</div>
                 <textarea className='w-100 my-2 rounded rounded-3' rows="5" placeholder="Message" type='text-area' value={page.msg} name = 'msg' onChange={handalchange} />
                 <button className='btn btn-success' onClick={handalclick}>Submit</button>
                 </div>
              </div>
             </div>
           

            </>
        </div>
    )
}

export default ContactUs
