import React, { Component } from 'react';
class Person extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props);
    //this.state = { smiling: false };

    this.handleClick = () => {
       this.props.callbackParent('改变后');
      //this.setState({smiling: !this.state.smiling});
    };
  }
  render () {
    const { name} = this.props;
    return (
      <div onClick={this.handleClick}>
        {this.props.name}
      </div>
    );
  }
}
Person.defaultProps = {
  name: '默认值'
};
Person.propTypes = {
  name: React.PropTypes.string
};
export default Person