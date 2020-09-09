import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const MyCarousel = () => {
         
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{

        width: "300vw",
        height: "200vh",
        margin: "auto",
   
    }}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-MenSuQkFeaI/WVOUS0eMFmI/AAAAAAAAALA/JehplmYqjU0Yf8AeyiQMRGM-6aokgc_xgCLcBGAs/s1600/Fun%2Bfact%2Bdiatoms.png" width="500px" height="500px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/5f/ea/7d/5fea7d35a9ab579eae659cb47568b4cd.jpg" width="500px" height="500px"
          alt="Second slide"
        />

<Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://i.pinimg.com/564x/9e/36/4e/9e364e3e6d4d8dfdd861ab39b58cedfd.jpg"width="500px" height="500px"
          alt="Third slide"
        />

<Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://cdn.britannica.com/40/12340-050-E09C431B/frustules-cell-walls-Diatoms-opaline-silica-pores.jpg" width="500px" height="500px"
          alt=" Slide Four"
        />
<Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://render.fineartamerica.com/images/rendered/square-product/small/images/rendered/default/greeting-card/images-medium-5/diatom-frustule-centric-dennis-kunkel-microscopyscience-photo-library.jpg?&targetx=0&targety=-25&imagewidth=700&imageheight=551&modelwidth=700&modelheight=500&backgroundcolor=C6787F&orientation=0" width="500px" height="500px"
          alt=" Slide Five"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://i.pinimg.com/564x/5d/91/d5/5d91d541b062af548f4df6b9da65fb7a.jpg"  width="500px" height="500px"
          alt="Six slide" />

<Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://render.fineartamerica.com/images/rendered/default/greeting-card/images-medium/43-diatom-sem-steve-gschmeissner.jpg?&targetx=0&targety=-89&imagewidth=700&imageheight=679&modelwidth=700&modelheight=500&backgroundcolor=6C5447&orientation=0"  width="500px" height="500px"
          alt="Seven slide" />



        {/* { <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item> 
    </Carousel> 
    </div>
  );
}



export default MyCarousel;


         