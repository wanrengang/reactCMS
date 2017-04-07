import React from 'react'
import { Route, IndexRoute,hashHistory } from 'react-router'
import {
  App
} from './containers'



const homeComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Home').default)
    },'home')
}
const newsComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/News/').default)
    },'news')
}
const newsDetailComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/News/Detail').default)
    },'detail')
};
const checkboxComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UI/checkbox').default)
    },'checkbox')
};
const radioComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UI/radio').default)
    },'radio')
};
const toastComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UI/toast').default)
    },'toast')
};
const modalComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UI/modal').default)
    },'modal')
};
const uploadImgComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UploadImg/').default)
    },'uploadImg')
};
const pickerComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UI/picker').default)
    },'picker')
};
const datePickerComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UI/datePicker').default)
    },'dataPicker')
};
const refreshComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UI/refreshControl').default)
    },'refresh')
};
const mytestComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/My/').default)
    },'mytest')
};
const carouselComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/UI/carousel').default)
    },'carousel')
};
const bannerComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/My/banner').default)
    },'banner')
};
const lifeCycleComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/My/lifeCycle').default)
    },'lifeCycle')
};
export default (
  
  <Route path="/"  history={hashHistory} component={App}>
    <IndexRoute getComponent={homeComponent}/>   
     <Route path="checkbox" getComponent={checkboxComponent}/>
     <Route path="radio" getComponent={radioComponent}/>
     <Route path="toast" getComponent={toastComponent}/>
     <Route path="modal" getComponent={modalComponent}/>
     <Route path="upload" getComponent={uploadImgComponent}/>
     <Route path="picker" getComponent={pickerComponent}/>
     <Route path="datePicker" getComponent={datePickerComponent}/>
     <Route path="refresh" getComponent={refreshComponent}/>
     <Route path="carousel" getComponent={carouselComponent}/>
     <Route path="mytest" getComponent={mytestComponent}/>
     <Route path="banner" getComponent={bannerComponent}/>
     <Route path="lifeCycle" getComponent={lifeCycleComponent}/>
     
     <Route path="news" >
      <IndexRoute getComponent={newsComponent}/>
        <Route path=":id" getComponent={newsDetailComponent}/>
    </Route>
  </Route>

);