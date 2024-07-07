import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const CreateTicket = () => {
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      setImages(files);
    };

  return (
    <div className = {`w-full flex justify-between items-center`}>
        <div className = {`w-1/2 h-fit p-10`}>
            {/* <input className = {`w-1/2 border-b border-white bg-bodyBackgroundColor`} type="textarea" placeholder = "Please describe the issue."/> */}
            <textarea className = {`w-3/4 h-full border-b border-white bg-bodyBackgroundColor text-white placeholder-white`} 
            placeholder = "Please describe the issue."
            value={description}
            onChange={handleDescriptionChange}>

            </textarea>
            <div className = {`mt-20 text-center w-3/4 mx-auto flex flex-col items-start py-2`}>
            <label className = {`block text-left text-white`}htmlFor="file">Attach any images to help us assist you.</label>
            <input className = {`mt-2 text-white text-left rounded-md py-2 w-full`} type="file" id="files" multiple onChange={handleFileChange} />
            </div>


        </div>

        <div className = {`w-1/3 h-1/2 mx-auto p-10`}>
        <div className = {`mb-10 h-3/4`}>
        <Carousel className = {`mb-10 h-full`}>
          <CarouselContent className = {`w-full h-3/4`}>
            {images.map((image, index) => (
              <CarouselItem key={index} className = {`w-full h-full`}>
                <img className = {`w-full h-full object-contain`}src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
   
          <CarouselPrevious />
          <CarouselNext />
       
        </Carousel>
        </div>

        <Link className = {`text-right group hover:scale-105`} to = {`/tickets`}>
        <h1 className = {`py-5 px-2 text-center text-white border border-white group-hover:scale-105`}>Submit ticket</h1></Link>

        {/* <Link>
            <h1>Submit itcket</h1>
        </Link> */}

          
        </div>
        

    </div>
  )
}

export default CreateTicket