import React, { Component } from 'react';
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class ModalDemo extends Component{
  constructor(props){
      //console.log("constructor");
      super(props);
      this.state = {
        msg:'内容',
        visible: false
      };
      //this.loadList({})
      //commonAjax('http://app.youx.mobi/website/news/listQuery',{},e=>this.listBack(e))
         
  }
  showModal() {
    var self=this;
    console.log('show');
    this.setState({visible: true,});
  }
  onClose() {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onClick={e=>this.showModal(e)}>
            可关闭对话框
          </Button>
          <Modal
            title="这是 title"
            closable
            maskClosable
            transparent
            onClose={e=>this.onClose(e)}
            visible={this.state.visible}
          >
            {this.state.msg}
          </Modal>
        </WingBlank>
       
        fdsafdasfasf
      </div>
    )
  }
}




export default ModalDemo
