import React from 'react';

class ListToggle extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {
        toggled: false
      }
    } 
    // property initializer syntax to correctly bind callbacks. 
    handleClick = () => {
      (this.state.toggled) ? this.setState({ toggled: false}) : this.setState({ toggled: true }); 
    }
    render() {
      return (
        <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
          <div>
            <i className="fa fa-fw fa-plus"></i>
            <i className="fa fa-fw fa-check"></i>
          </div>
        </div>
      );
    }
  }

  export default ListToggle;