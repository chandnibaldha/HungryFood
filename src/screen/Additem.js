import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Additem() {
  const [StoreData, setStoreData] = useState({});
  const [size, setSize] = useState({
    half:"",
    full:""
  });
  
  const [FoodData, setFoodData] = useState({
    categoryName: '',
    name: '',
    foodImg: '',
    description: '',
  });
  const restaurant = localStorage.getItem("restaurant")
  const location = localStorage.getItem("location")

  const handalchange = (event) => {
    setFoodData({ ...FoodData, [event.target.name]: event.target.value })
  };
  const handleOnChangeImg =async(e)=>{
    const file = e.target.files[0]
    console.log("file ",file)
    const src = await convertToBase64(file)
    setFoodData({...FoodData,foodImg:src})
  }

  const handalclick = (event) => {
    event.preventDefault();
    const NewData = { ...FoodData,options:[size] };
 
    submit(NewData)
      // setFoodData ({
      //   categoryName : '',
      //    name : '',
      //    foodImg :'',
      //    description :'',
      // });
  };
  const submit = async (item) => {
    let url = "/item/additem";
    const response = await fetch(`http://localhost:5000${url}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       ...item,restaurant:restaurant,location:location
      })
    });
    const res = await response.json()
    if(res.success){
      alert("Item Added")
    }else{
      alert("Not added")
    }
   // console.log(item);
  }
  const handleOnchangeSize =(e)=>{
    setSize({...size,[e.target.name]:e.target.value})
  }

  return (
    <div>
      < Navbar />
      <div className='container text-white' style={{ marginBottom: "120px", marginTop: "120px" }}>
        <form action="">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="Category- Name"
              name="categoryName"
              value={FoodData.categoryName}
              onChange={handalchange}
              placeholder='CategoryName'

            />
          </div>
          <div className="mb-3">


            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={FoodData.name}
              onChange={handalchange}
              placeholder='Name'

            />

          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              id="Food-Img"
              onChange={handleOnChangeImg}
              placeholder='FoodImg'

            />
          </div>
          <div className='mb-3 row'>
            <div className='col-4'>      
            <input className='rounded rounded-2' type="Number" name="half" value={size.half} onChange={handleOnchangeSize} placeholder='Half'/>
            </div>
            <div className='col-4'>
            <input className='rounded rounded-2' type="Number" name="full" value={size.full} onChange={handleOnchangeSize} placeholder='Full'/>
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id=" Description"
              name="description"
              value={FoodData.description}
              onChange={handalchange}
              placeholder='Description'
            />
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="btn btn-success fw-bold"
              onClick={handalclick}

            >
              Submit
            </button></div>
        </form>
      </div>
      <Footer />
    </div>
  )

  function convertToBase64(file){
    return new Promise((res,rej)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload=()=>{
        res(fileReader.result)
      }
      fileReader.onerror=(error)=>{
        rej(error)
      }
    })
  }
}

