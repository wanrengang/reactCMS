import React, { Component } from 'react'
import styles from './index.scss'

const Item = ({data,id,onClick}) => {
  return (
    <div className={styles.root} onClick = {() => onClick()}>
     000 {data}---{id}
    </div>
  )
}
class MyUI extends Component {
  
   render() {
     const { data, id,onClick} = this.props;
     console.log(this.props)
    return (
      <div>
        <div className={styles.root}>
          my----{data}
          </div>
        <div className={styles.title}>标题</div>
      </div>
    )}
}
export default MyUI