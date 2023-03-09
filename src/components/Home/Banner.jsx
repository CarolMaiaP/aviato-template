import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import principalBanner from '../../assets/principal-banner.png'


import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default () => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => swiper.slideNext()}
    >
      <SwiperSlide>
        <img src={principalBanner} alt="Banner principal" />
        <div className="banner-infos">
          <h3>Summer Collection</h3>
          <p>Separamos os melhores looks para você neste 2019</p>
          <div className="button">
            <button>Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><img src={principalBanner} alt="Banner principal" /></SwiperSlide>
    </Swiper>
  );
};