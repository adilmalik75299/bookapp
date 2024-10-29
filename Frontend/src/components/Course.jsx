import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
// import list from "../../public/list.json";
import Card from "./Card";
import axios from "axios";
const Course = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook=async ()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      }
      catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="pt-[100px] max-w-screen-2xl container mx:auto md:px-20 px-4">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            we are delighted to have you span{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            repudiandae sed quae neque saepe iusto doloremque, perspiciatis
            architecto beatae molestiae culpa itaque, ea voluptas laborum
            deserunt quibusdam eaque atque, tempore adipisci optio. Et, ullam.
            Iusto perferendis quidem incidunt quia ipsam exercitationem
            quibusdam vero itaque, debitis numquam, aperiam non doloremque
            voluptatum!
          </p>
         <Link to="/">
         <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
         </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Course;
