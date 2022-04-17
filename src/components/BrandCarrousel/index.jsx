import React from 'react'
import Carousel from 'react-grid-carousel'
import img1 from '../../assets/word.png'
import img2 from '../../assets/shop.png'
import img3 from '../../assets/joo.png'
import img6 from '../../assets/drupal.png'
import img7 from '../../assets/magento.png'
import './index.css'
const Gallery = () => {
  return (
    <Carousel cols={5} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={img1} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img2} alt='' className='img_brandCarrousel' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img3} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img6} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img7} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img1} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img2} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img3} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img6} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img7} alt='' className='img_brandCarrousel'/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;