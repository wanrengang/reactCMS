import React, { Component } from 'react';
import { Picker, List,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import district from './data';
class PickerDemo extends Component{
  constructor(props){
      //console.log("constructor");
      super(props);
      this.state = {
          dataTest: [{
                value:"340000",
                label:"\u5b89\u5fbd\u7701",
                children:[{
                  value:"340800",
                  label:"\u5b89\u5e86\u5e02",
                  children:[{
                    value:"340800",
                    label:"\u5b89\u5e86\u5e02",
                  }]
                }]
              },
              {
                value:"341622",
                label:"\u8499\u57ce\u53bf",
                children:[{
                  value:"341702",
                  label:"\u5b89\u5e86\u5e02",
                  children:[{
                    value:"340800",
                    label:"\u5b89\u5e86\u5e02",
                  }]
                }]
              }
            ],
        data:[],
        cols: 1,
        area:[]
      };
      
         
  }
  onClick() {
    setTimeout(() => {
      this.setState({
        data: [{
                value:"340000",
                label:"\u5b89\u5fbd\u7701",                
              },
              {
                value:"zj",
                label:"\u8499\u57ce\u53bf",
                
              }
            ]
      });
    }, 500);
  }
  //每列数据选择变化后的回调
  onPickerChange(val) {
    console.log(this.state.data);
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    if (val[0] === 'zj') {
      d.forEach(i => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
          } else if (val[1] === 'zj-hz') {
            i.children.forEach(j => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
    });
  }
  curChange(value){
    console.log(value)
   console.log(this.refs.areaName.props.extra);

  }
  format(values){
    console.log(values)
    console.log(this.props.extra)
   console.log(this.refs.areaName?this.refs.areaName.props.extra:'');

  }
  subFun(){
    console.log(this.refs.areaCode?this.refs.areaCode.props.value:'')
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
         <List style={{ backgroundColor: 'white' }}>       
         <Picker data={this.state.data} cols={this.state.cols}
          {...getFieldProps('district2')}
          onPickerChange={(value)=>this.onPickerChange(value)}
        >
          <List.Item arrow="horizontal" onClick={()=>this.onClick()}>省市选择(异步加载)</List.Item>
        </Picker>  
         
          <Picker   data={this.state.dataTest} cols={3} {...getFieldProps('dddddd')}   className="forss" ref="areaCode" name="areaCode"   >
            <List.Item arrow="horizontal" ref="areaName" name="areaName">选择省份</List.Item>
          </Picker>

           <Button type="primary" onClick={e=>this.subFun(e)}>primary 按钮</Button>
        </List>
      </div>
    )
  }
}

PickerDemo = createForm()(PickerDemo);
export default PickerDemo
