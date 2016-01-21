import React, {
  Component, PropTypes
}
from 'react';

export default class App extends Component {
  state = {
    context: [],
    showOptions: false
  }

  componentWillMount() {
    console.log('The ComponentWillMount is run');
  }

  componentWillUnmount() {
    console.log('The ComponentWillUnmount is run');
  }

  componentWillReceiveProps() {
    console.log('The ComponentWillReceiveProps is run');
  }

  componentDidUpdate() {
    console.log('The ComponentDidUpdate is run');
  }

  render() {
    var options;
    console.log('showOptions =>',this.state.showOptions)
    if (this.state.showOptions) {
      options = (
        <ul className='options'>
          <li>m</li>
          <li>a</li>
          <li>j</li>
          <li>u</li>
          <li>n</li>
        </ul>
      );
    }

    return (
      <div className="dropdown" onClick={::this.handleClick}>
        <label>请选择</label>
        {options}        
      </div>
    );
  }

  handleClick(){
    console.log('handleClick');
    this.setState({
      showOptions: true
    });
  }
}
