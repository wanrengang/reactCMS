import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import * as CommonServer from '../../libs/CommonServer.js'
export default class Detail extends Component {
  constructor(props){
    super(props);
    console.log(CommonServer)
    const {id} = this.props;
    this.state = {
            itemObj:{}
    };
    CommonServer.commonAjax(CommonServer.API.newsDetial,{id:this.props.params.id},e=>this.handFun(e))
  }
  handFun(data){
    this.setState({itemObj:data});
    //console.log(data)
  }
  render() {
    //const viewObj=this.state.itemObj;
    return (
      <div className="box">    
        <h2>{this.state.itemObj.title}</h2>
        <div className="font-34">
        <div dangerouslySetInnerHTML={{__html: this.state.itemObj.content}}></div>
        </div>
      </div>
    )
  }
}
