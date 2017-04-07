import React, { Component } from 'react';
import { DatePicker, List,Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('00:30 +0800', 'HH:mm Z').utcOffset(8);

const gmtNow = moment().utcOffset(0);



class DatePickerDemo extends Component{
  constructor(props){
      //console.log("constructor");
      super(props);
      this.state = {
         date: zhNow,
      };
      //this.loadList({})
      //commonAjax('http://app.youx.mobi/website/news/listQuery',{},e=>this.listBack(e))
         
  }
  onChange(date) {
    console.log(1444)
    // console.log('onChange', date);
    this.setState({
      date,
    });
  }
   subFun(){
    var test=this.refs.curDate?this.refs.curDate.props.value.format():'';
    console.log(test)
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List
        renderHeader={() => '选择时间'}
        style={{ backgroundColor: 'white' }}
      >
        <DatePicker
          mode="date"
          title="选择日期"
          extra="可选,小于结束日期"
          
          {...getFieldProps('date1', {
            initialValue: zhNow,
          })}
          minDate={minDate}
          maxDate={maxDate}
          ref="curDate"
        >

        
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
        <DatePicker mode="time" {...getFieldProps('time1')}>
          <List.Item arrow="horizontal">时间,不限定上下限</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          {...getFieldProps('time', {
            initialValue: zhNow,
          })}
          minDate={minTime}
          maxDate={maxTime}
        >
          <List.Item arrow="horizontal">时间</List.Item>
        </DatePicker>
        <DatePicker className="forss"
          mode="datetime"
          
          value={this.state.date}
        >
          <List.Item arrow="horizontal">日期+时间</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          format={val => val.format('HH:mm Z')}
          okText="Ok"
          dismissText="Cancel"
          locale={enUs}
          {...getFieldProps('customformat', {
            initialValue: gmtNow,
          })}
        >
          <List.Item arrow="horizontal">time(en_US)</List.Item>
        </DatePicker>
      </List>
      <Button type="primary" onClick={e=>this.subFun(e)}>primary 按钮</Button>
      </div>
    )
  }
}



DatePickerDemo = createForm()(DatePickerDemo);

export default DatePickerDemo
