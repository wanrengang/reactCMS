import React, { Component } from 'react';
import { Link } from 'react-router';
import { Progress, List,Pagination } from 'antd-mobile';
import * as CommonServer from '../../libs/CommonServer.js';

export default class MyTest extends Component {	
	constructor(props) {
	    super(props);
	    this.state = {
	      percent: 0,
	      percentFun:{},
	      showProgress:true,
	      newsList: [],
	      curPage:0
	    }; 
	    this.loadList({});
	};
	loadList=(data)=>{		
		CommonServer.commonAjax(CommonServer.API.newsList,data,e=>this.listBack(e));

	}
	//列表回调
	listBack(data){
	    console.log(data.dataList);
	    this.setState({
	    	newsList:data.dataList
	    	
	    });
	    console.log(this.state.newsList)
	    
	    //this.state.list=data;
	}
	progressing = () => {
	    let p = this.state.percent + 10;
	    if (this.state.percent >=80) {
	      p = 0;
	      clearTimeout(this.state.percentFun);
	      this.state.showProgress=false;
	    }
	    this.setState({ percent: p });
	};
	componentWillMount() {
		
		console.log('componentWillMount');
		this.progressing();
		this.state.percentFun=setInterval(() => {
		    this.progressing();
		    console.log(this.state.percent)
		}, 50);
		
  	};
	componentDidMount() {
		console.log('componentDidMount');	
        this.setState({
			percent: 100,
			showProgress:false
		 });
  	};
	render() {	
		return (
		  <div >
		  	{/*进度条start*/}
		  	{this.state.showProgress && <Progress percent={this.state.percent} unfilled="hide" />}
        	{/*进度条end*/}
        	{/*生命周期start*/}
		  	<p><img src="../../images/liftCycle.png" /></p>	
		   	constructor:构造方法<br/>
		    Mounting：已插入真实 DOM<br/>
			Updating：正在被重新渲染<br/>
			Unmounting：已移出真实 DOM
			{/*生命周期end*/}

			<List>	
					{this.state.newsList.map(item =>
					<List.Item wrap key={item.id}  onClick={() => this.detailFun(item.id)}><Link to={{pathname:'/news/' + item.id}}>{item.id}--{item.title}</Link></List.Item>
					)}   
			</List>
			<Pagination
		              total={this.state.total}
		              current={this.state.curPage-1}
		              prevText="上一步"
		              nextText="下一步"
		              onChange={(current) =>this.loadList({page:current+1})}
		            />
		  </div>
		)
	}
}