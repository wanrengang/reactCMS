import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import { List, Checkbox } from 'antd-mobile';
import 'rc-banner-anim/assets/index.css';
import './index.scss'
const BgElement = Element.BgElement;
export default class banner extends Component {
	state = {
		val:147
	}
	
	render() {	

		return (
			<QueueAnim delay={300}>
		
		<List key="a" renderHeader={() => 'CheckboxItem 演示'}>
        	<BannerAnim prefixCls="banner-user">
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#364D79',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="1" 
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>
      	</List>
      		
      </QueueAnim>
		)
	}
}