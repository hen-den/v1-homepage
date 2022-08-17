// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function CardOverview(props) {
    return (
        <section className="section card-overview" style={{display:"block"}}>
            <h1>What Are My Focus Topics?</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    // when window width is >= 640px
                    1280: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    550: {
                        slidesPerView: 1,
                    },
                }}
                style={{padding: 15}}
            >

                {props.topics.map(topic => {return (
                        <SwiperSlide>
                        <div className="cards swiper-slide">
                            <div className="cards__card-content">
                                <div>
                                    {topic.headline}
                                </div>
                                <h2 className="">
                                    {topic.name}
                                </h2>
                                <p>{topic.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                );
                })}

            </Swiper>
        </section>
    )
}

