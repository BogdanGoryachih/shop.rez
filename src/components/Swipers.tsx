import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';



import { useState } from 'react';

export default () => {
  const slides =[
    {
      url:'./amunition.jpg'
    },
    {
      url:'./notepad.jpg'
    },
    {
      url:'./logo.svg'
    },
  ]
  const [currentIndex,setCurentIdex] = useState(0)
  const preslide = () =>{
    const isfirstslide = currentIndex ===0;
    const newIdex = isfirstslide ? slides.length -1 :currentIndex-1;
    setCurentIdex(newIdex);
  }
  const nexslide = ()=>{
    const islastslide = currentIndex === slides.length -1;
    const newIndex = islastslide? 0 :currentIndex +1;
    setCurentIdex(newIndex);
  }
  return (
    <div className="simpel-slider">
     
      <div style={{backgroundImage: ` url(${slides[currentIndex].url})`}} className="slider-img">
          <BsChevronCompactLeft onClick={preslide} className="hidden group-hover:block  menu-slider-left"  size={35}></BsChevronCompactLeft>
          <BsChevronCompactRight onClick={nexslide} className="hidden group-hover:block menu-slider-right" size={35}></BsChevronCompactRight>
        
        </div>
      
        
        
    </div>
  );
};