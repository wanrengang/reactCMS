import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory,hashHistory } from 'react-router'
import Root from './containers/Root';
import QueueAnim from 'rc-queue-anim';
const rootEl = document.getElementById('app');
render(
   <QueueAnim> <AppContainer>
      <Root history={browserHistory} />
    </AppContainer></QueueAnim>,
    rootEl
  )