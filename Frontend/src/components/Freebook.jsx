import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from '../../public/list.json';
import Slider from "react-slick";
import Cards from "./cards";


function Freebook() {
    const filterData = List.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Courses Books</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus maxime, deserunt vero cupiditate vel,
                        quos perferendis blanditiis adunde iste id qui placeat
                        dignissimos cumqueea aut consectetur sed aspernatur?
                    </p>
                </div>

                <div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {filterData.map((item) =>(
                                <Cards item={item} key={item.id}/>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Freebook
