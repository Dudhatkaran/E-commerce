import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { style } from "./Slider.module.css";
import { Images } from '../../Shared';

const sliderSetting = {
    items: 1,
    // margin:'2px',
    loop: true,
    animateOut: 'fadeOutRight slower',
    // mouseDrag:false,
    // touchDrag:false,
    // pullDrag:false,
    // freeDrag:true,
    center: true,
    // merge:true,
    // autoWidth:true,
    // startPosition:5,
    // nav:true,
    // rewind:false,
    slideBy: 3,
    // dots:true,
    // dotsEach:true,
    autoplay: true,
    autoplayTimeout: 3000,
    // autoplayHoverPause:true,
    smartSpeed: 300,
    // autoplaySpeed:false,
    // navSpeed:true,
};

const Slider = () => {

    return (
        <OwlCarousel className='owl-theme'  {...sliderSetting}>
            <div class='item'>
                <img src={Images.Slider1}></img>
            </div>
            <div class='item'>
                <img src={Images.Slider2}></img>
            </div>
            <div class='item'>
                <img src={Images.Slider3}></img>
            </div>
        </OwlCarousel>
    )
}

export default Slider