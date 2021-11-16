import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
/* eslint-disable */

function Slider() {
  const datasImg = [
    {
      id: 1,
      imgUrl:
        'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg',
    },
    {
      id: 2,
      imgUrl:
        'https://th.bing.com/th/id/OIP.qH6EtriaTOu84QB91ilGgQHaE8?pid=ImgDet&rs=1',
    },
    {
      id: 3,
      imgUrl:
        'https://th.bing.com/th/id/R.05f4a203e60c3c93919b8137a598e455?rik=43WHNUWQmxVJSQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fHD-Venice-Italy-Wallpapers.jpeg&ehk=zQhjlKWxHHyfe7fP0uxCVvue0wsIeXjF9%2bku33uy%2btw%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 4,
      imgUrl:
        'https://evasion-online.com/images/2015/07/tower-bridge-a-londres.jpg',
    },
    {
      id: 5,
      imgUrl:
        'https://exploreplanet.org/pays-bas/noord-holland/images/amsterdam.jpg',
    },
  ];

  return <Carousel autoPlay={3000} transitionTime={2000}infiniteLoop={true}>
    {datasImg.map(img => (
      <div key={img.id} className="h-80">
        <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" src={img.imgUrl}/>
      </div>
     ) )}
  </Carousel>;
}

export default Slider;
