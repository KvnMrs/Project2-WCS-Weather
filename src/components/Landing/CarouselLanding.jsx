import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
/* eslint-disable */

function CarouselLanding() {
  const datasImg = [
    {
      id: 1,
      imgUrl:
        'https://images.unsplash.com/photo-1583571985307-02bc70f01ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80',
    },
    {
      id: 2,
      imgUrl:
        'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80',
    },
    {
      id: 3,
      imgUrl:
        'https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80',
    },
    {
      id: 4,
      imgUrl:
        'https://images.unsplash.com/photo-1584646098378-0874589d76b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80',
    },
    {
      id: 5,
      imgUrl:
        'https://images.unsplash.com/photo-1588535684923-900727736ac0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80',
    },
  ];

  return (
    <Carousel autoPlay={3000} transitionTime={2000} infiniteLoop={true}>
      {datasImg.map((img) => (
        <div key={img.id} className="h-3/5">
          <img
            className="object-cover object-center mx-auto rounded-lg shadow-2xl"
            src={img.imgUrl}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselLanding;
