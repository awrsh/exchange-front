// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';
import useGetCuurencyListQuery from '../../hook/query/currency/useGetCuurencyListQuery';

export default function SlideListCurrency() {
    const { data, isLoading } = useGetCuurencyListQuery(true)
    return (
        isLoading ? null :
            <div className='flex items-center w-[98%] rounded-xl mb-3  mx-auto justify-center bg-white dark:bg-block h-[60px] z-50 shadow'>
                <Swiper
                    spaceBetween={60}
                    speed={5000}
                    loop
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    slidesPerView={"auto"}
                >
                    {
                        data?.objects.map((currency, idx) => {
                            return (
                                <SwiperSlide className='!min-w-[110px] max-w-fit flex items-center gap-3' key={idx}>
                                    <img className='w-7 h-7' src={currency?.image!} alt='' />
                                    <p className='whitespace-nowrap text-xs'>{currency.title_fa}</p>
                                    <p className='text-xs whitespace-nowrap text-gray-800 dark:text-white font-num'>{Number(currency.price).toLocaleString()} تومان</p>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
    );
}
