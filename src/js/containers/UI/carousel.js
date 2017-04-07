import React, { Component } from 'react';
import { WhiteSpace, WingBlank, Flex, Carousel } from 'antd-mobile';
import styles from './ui.scss'
class CarouselDemo extends Component{
  constructor(props){
      //console.log("constructor");
      super(props);
      this.state = {
         current: 2,
      };
      //this.loadList({})
      //commonAjax('http://app.youx.mobi/website/news/listQuery',{},e=>this.listBack(e))
         
  }
   beforeSlide(from, to) {
    console.log(`slide from ${from} to ${to}`);
  }
  slideTo(index) {
    console.log('slide to', index);
  }
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      selectedIndex: this.state.current,
      beforeChange: this.beforeSlide,
      afterChange: this.slideTo,
    };
    return (
      <div>
       <div  >
          <WingBlank>
            <Carousel {...settings}>
              <Flex
                justify="center"
                className={styles.flex}
              >
                <h3>fdsfasdfasf 1</h3>
              </Flex>
              <Flex
                justify="center"
                className={styles.flex}
              >fdsfasdfas
                <h3>fdsfsafasfCarousel 2</h3>
              </Flex>
              <Flex
                justify="center"
                className={styles.flex}
              >
                <h3>Carousel 3</h3>
              </Flex>
            </Carousel>
          </WingBlank>
          <WhiteSpace size="lg" />
        </div>
      
      </div>
    )
  }
}





export default CarouselDemo
