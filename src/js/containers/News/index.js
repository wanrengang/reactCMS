import React, { Component } from 'react';
import { Link } from 'react-router';
import { List,Pagination,WingBlank,WhiteSpace } from 'antd-mobile';
import * as CommonServer from '../../libs/CommonServer.js';


export default class News extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	        newsList: [],
	        curPage:0
	    };
	    this.loadList({})
	    //commonAjax('http://app.youx.mobi/website/news/listQuery',{},e=>this.listBack(e))
	       
	}
	//
	loadList(data){		
		CommonServer.commonAjax(CommonServer.API.newsList,data,e=>this.listBack(e))
	}
	//列表回调
	listBack(data){
	    console.log(data);
	    this.setState({
	    	newsList:data.dataList,
	    	curPage:data.page,
	    	total:data.totalPage,
	    });
	    
	    //this.state.list=data;
	}
	detailFun(id){
		console.log(id);
        ///console.log(this.state);
	}
	render() {
	    return (
			<div>
				<List>	
					{this.state.newsList.map(item =>
					<List.Item wrap key={item.id}  onClick={() => this.detailFun(item.id)}><Link to={{pathname:'/news/' + item.id}}>{item.id}--{item.title}</Link></List.Item>
					)}   
				</List>
				<WhiteSpace size="lg" />
		          <WingBlank>
		            <Pagination
		              total={this.state.total}
		              current={this.state.curPage-1}
		              prevText="上一步"
		              nextText="下一步"
		              onChange={(current) =>this.loadList({page:current+1})}
		            />
		          </WingBlank>
			</div>
	    )
	}
}