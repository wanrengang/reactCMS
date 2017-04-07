import React,{ Component } from 'react'
import { Link} from 'react-router'
import {WhiteSpace, WingBlank, Carousel,List  } from 'antd-mobile'
import QueueAnim from 'rc-queue-anim';
class Home extends Component {
   constructor(props){   
        super(props);
        this.state = {
            list: []
     };
       
  }
  componentDidMount(){
   // console.log('componentDidMount');
    var self = this;
    
  }  
  handFun(data){
    //console.log(data);
    this.setState({list:data.dataList});
    //this.state.list=data;
  }
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      mode: 'banner',
      initialSlide: this.state.current,
      afterChange: this.slideTo
    }
    const { list } = this.state

    return (
     
      
       <QueueAnim  delay={300} type={['right', 'left']}
          ease={['easeOutQuart', 'easeInOutQuart']} >
      <List  key="a"
        renderHeader={() => '实践Demo'}>
         <Link to="mytest">
           <List.Item
            extra=""
            arrow="horizontal"
            onClick={() => {}}>
           自定义-父子间传参</List.Item>
         </Link>
        <Link to="news" >
          <List.Item
            extra=""
            arrow="horizontal"
            onClick={() => {}}>
            新闻页面
          </List.Item>
        </Link>
        <Link to="banner" >
          <List.Item
            extra=""
            arrow="horizontal"
            onClick={() => {}}>
            Banner
          </List.Item>
        </Link>
        <Link to="lifeCycle" >
          <List.Item
            extra=""
            arrow="horizontal"
            onClick={() => {}}>
            生命周期Demo
          </List.Item>
        </Link>
      </List>

      <List   key="b"
        renderHeader={() => '组件Demo'}>
       
        
       
        <Link to="refresh">
         <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
         下拉刷新</List.Item></Link>
        <Link to="datePicker">
          <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
         时间选择器</List.Item></Link>
        <Link to="picker">
          <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
         选择器</List.Item></Link>

        <Link to="carousel">
          <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
         幻灯片</List.Item></Link>


        

        <Link to="upload">
          <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
         图片上传</List.Item></Link>

        <Link to="checkbox">
          <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
          复选框</List.Item></Link>

        <Link to="modal">

          <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
          modal</List.Item></Link>

        <Link to="toast">
          <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
          toast</List.Item></Link>

        <Link to='radio'>
        <List.Item
          extra=""
          arrow="horizontal"
          onClick={() => {}}>
          radio        
        </List.Item>
        </Link>

    </List>
    </QueueAnim>
  



     
      
    )
  }
}


export default Home