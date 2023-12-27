import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Slide1 from "../../assets/images/slide.jpg"
export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img className='object-cover w-full rounded-xl' src={Slide1} alt=''/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
