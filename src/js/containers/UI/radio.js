import React, { Component } from 'react';
import { List, InputItem, Switch, Stepper, Slider, Radio, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';


const RadioItem = Radio.RadioItem;
class RadioDemo extends Component{
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
  handleChange(e) {
   
    this.setState({
        value: 1,
      });

    console.log(this.state.value);
  }
  handleChange2(e) {
    console.log(e.target.checked);

    if (!e.target.checked) {
      this.setState({
        value: 2,
      });
    }
  }
  onSubmit() {
    this.props.form.validateFields({ force: true }, (error, values) => {
      if (!error) {
        const formValue = this.props.form.getFieldsValue();
        console.log(values);
        console.log(formValue);
      } else {
        alert('校验失败');
      }
    });
  }
  onReset() {
    //this.props.form.resetFields();
    alert('重置完成');
  }
  validateAccount(rule, value, callback) {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('帐号至少4个字符'));
    }
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div>
      
      <List
        renderHeader={() => '列表单选'}
      >
        <Radio.RadioItem
          checked={this.state.value === 1}
          onChange={e=>this.handleChange(e)}
          disabled={this.state.disabled}
        >
          选项一
        </Radio.RadioItem>
        <Radio.RadioItem
          checked={this.state.value === 2}
          onChange={e=>this.handleChange2(e)}
          disabled={this.state.disabled}
        >
          选项二
        </Radio.RadioItem>
        <Radio.RadioItem
          checked
          onChange={this.handleChange}
          disabled
        >
          选项三
        </Radio.RadioItem>
        <Radio.RadioItem
          checked={false}
          onChange={this.handleChange}
          disabled
        >
          选项四
        </Radio.RadioItem>
      </List>
      <WhiteSpace />
      <WingBlank size="lg">
        <Button type="primary" onClick={this.onSubmit}>提交验证</Button>
        <WhiteSpace />
        <Button onClick={this.onReset}>重置</Button>
      </WingBlank>
      <WhiteSpace />
      <WhiteSpace />
    </div>
    )
  }
}


RadioDemo = createForm()(RadioDemo);

export default RadioDemo
