import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';

const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];
/* eslint global-require: 0 */
function countdown(n) {
      while (n --> 0)  // "n goes to zero"
        alert(n);
      //blastoff();
    }
class IconDemo extends Component {
  render() {
    const data = icons.map(item => ({
      icon: (<Icon type={item} />),
      text: item,
    }));
   // countdown(2)

   let s = Symbol();
   let s2 = Symbol();
  console.log(typeof s)
 console.log(s)
 console.log(s2)
    return (
      <Grid data={data} columnNum={4} hasLine={false} />
    );
  }
}

export default IconDemo