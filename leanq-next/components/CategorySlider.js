import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Lottie from "lottie-react";
import patternAnimation from "../js/lottie/homepage.json";
import Footer from "../components/Footer";
import { callApi } from "../utils/httpreq";
import URL_LIST from "../constants/url.constants.js";
import { get } from "jquery";

// next arrow
function SampleNextArrow(props) {
    const { nextArrowType, className, style, onClick } = props;
    return (
      <img src="img/arrow-right.svg"
        className={`${nextArrowType} ${className}`}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }
  
  // previous arrow
  function SamplePrevArrow(props) {
    const { prevArrowType, className, style, onClick } = props;
    return (
      <img src="img/arrow-left.svg"
        className={`${prevArrowType} ${className}`}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

export default function CategorySlider( props ) {
    const { options } = props;
    // console.log("opt",options);
    const [categories, setcategories] = useState(null);


    useEffect( ()=> {
       (async ()=> {
           
            const homeResponse= await callApi(URL_LIST.homeCategory, "GET");
            setcategories(homeResponse.data);
        })()
    },[]);
    
    // console.log("response", categories)
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
   
    arrows: true,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,

   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  }

  return (
    <>
     <div className="row mb-3  mt-5">
                    <div className="col-md-12">
                        <h5>Take a look at  what we’ve created </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                      <Slider {...settings} className={`${options?.sliderClass ? options.sliderClass  :''} work-slider`}>
                                        {
                                                categories?.map( (item)=> {
                                                    return(
                                                    <div className="card overlay-card text-bg-dark" key={item.id}>
                                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.attributes.thumbnail.data.attributes.url}`} className="card-img" alt="..." />
                                                        <div className="card-img-overlay overlay-dark">
                                                            <div className="pb-4 ps-2 overlay-bottom">
                                                                <h4 className="card-title">{item.attributes.title}</h4>
                                                                <p className="card-text">{item.attributes.description}</p>
                                                            
                    
                                                            </div>
                                                        </div>
                                                    </div>
                    
                                                    )
                    
                                                })
                                            }

                                        </Slider>
                      

                    </div>

                </div>


    </>
  );
}