import React, { Component } from 'react';
import { List, Checkbox } from 'antd-mobile';
import QueueAnim from 'rc-queue-anim';
const CheckboxItem = Checkbox.CheckboxItem;
class checkbox extends Component{
  constructor(props){
      //console.log("constructor");
      super(props);
      this.state = {
        disabled: false,
        value:2,
      };
      //this.loadList({})
      //commonAjax('http://app.youx.mobi/website/news/listQuery',{},e=>this.listBack(e))
         
  }
  handleChange(e){
    e.target.defaultChecked=false;
    e.target.checked=!e.target.checked;
    console.log(e)
  }
  onChange(val) {
    console.log(val);
  }
  onClick() {
    console.log(this.props.form.getFieldsValue());
  }
  render() {
   const data = [
      { value: 0, label: '博士' },
      { value: 1, label: '本科' },
      { value: 2, label: '高中' },
    ];
    return (
       <QueueAnim  delay={300} >
       <List key="a" renderHeader={() => 'CheckboxItem 演示'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          初中<List.Item.Brief>辅助文字内容</List.Item.Brief>
        </CheckboxItem>
      </List>
      
      </QueueAnim>
    )
  }
}





export default checkbox
