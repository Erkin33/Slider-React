import './App.css';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function App() {
  const data = [
    {
    image: 'images/2024Nissan.jpg',
    title: 'Nissan GTR'
    },
    {
      image: 'images/Koenigsegg.jpg',
      title: 'Koenigsegg'
    },
    {
      image: 'images/Porsche.jpg',
      title: 'Porsche'
    }
  ]
  return (
    <div className="App bg-[#5556] h-screen w-[100%] flex justify-center">

      <div className='w-[600px] border-[1px] border-[black] h-[300px] mx-auto my-auto'>
        <Slider>
          
      {
        data.map((item, index) => {
          return(
            <div key={index}>
              <div>
                <img src={item.image} className='w-full h-60 object-contain'/>
              </div>

              <div className='p-6 bg-black'>
                <p className='font-semibold text-white text-center'>
                    {item.title}
                </p>
              </div>
            </div>
          )
        })
      }
        </Slider>

      </div>
    </div>
  );
}

export default App;