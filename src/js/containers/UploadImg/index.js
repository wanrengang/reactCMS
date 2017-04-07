import React, { Component } from 'react';
import { ImagePicker } from 'antd-mobile';
export default class UploadImg extends Component {
	constructor(props){
	    //console.log("constructor");
	    super(props);
	    this.state = {
	        files: [{
		        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
		        id: '2121',
		      }, {
		        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
		        id: '2122',
		    }],

	    };
	    //this.loadList({})
	    //commonAjax('http://app.youx.mobi/website/news/listQuery',{},e=>this.listBack(e))
	       
	}
  render() {
    return (
      <div>
        <ImagePicker
          onChange={(files, type, index) => {
            console.log(files);
            console.log(type);
            console.log(index);
            this.setState({
              files,
            });
          }}
          onImageClick={(index, files) => {
            console.log(index);
            console.log(files);
          }}


          files={this.state.files}
         // selectable={this.state.files.length < 2}
        />
      </div>
    )
  }
}