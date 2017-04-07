 //import $ from './jquery.min.js'
 //import reqwest from 'reqwest';
 import axios from 'axios';
 import config from './config'
 //接口地址
 const API = {
     host: "http://app.youx.mobi/",
     newsList: 'website/news/listQuery',
     newsDetial: 'website/news/getNewsById',
 };
 //ajax方法
 const commonAjax = function(URL, data, callBack) {
     //老的基于jquery
     /*var promise = $.ajax({
            url: URL,
            data:data,
            });
        //把方法作为回调提供并使用
       return promise.then(function(data){
        console.log(data);
        callBack(data.data)
        // self.handFun(data.data.dataList)
        });*/
     //基于reqwest
     /*reqwest({
             url: API.host+URL,
             type: 'jsonp',
             method:'post',
             data:data,         
         }).then((data) => {        
           callBack(data.data)
         }).fail(function (err, msg) {
           console.log(err)
         }).always(function (resp) {
             console.log('always')
         });*/
     /* axios.get(API.host + URL, {
          params: data
      }).then((response) => {
          console.log(response.data)
          if (response.data.status == 1) {
              callBack(response.data.data)
          }
      }).catch(function(error) {
          console.log(error);
      })*/
     /*var config = {
         progress: function(progressEvent) {
             console.log('progressEvent')
         }
     };
     //axios.create([config])
     var instance = axios.create({
         baseURL: API.host
     });
     
     axios.get( + URL, {
         params: data
     }, config).then((response) => {
         console.log(response.data)
         if (response.data.status == 1) {
             callBack(response.data.data)
         }
     }).catch(function(error) {
         console.log(error);
     })*/
     config.params = data;
     axios.get(URL, config).then((response) => {
        console.log(response)
         if (response.data.status == 1) {
             callBack(response.data.data)
         }
     }).catch(function(error) {
         console.log(error);
     });
 }
 export {
     API,
     commonAjax
 };