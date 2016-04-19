import * as React from 'react';
import ReactDOM from 'react-dom'

export default class dropDownContainer extends React.Component {

  constructor(){
    super();
    this.state = { isOpen : false };

    this.handleDocumentClick = () => {
        this.setState({ isOpen : false });
    };
  }

  componentWillReceiveProps(newProps){
    this.setState(Object.assign({}, this.state, { isOpen : newProps.isOpen }));
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  render(){
    if(!this.props.children || !this.state.isOpen){
      return null;
    }
    return (
        <div className="drop-down-container">
          <div className="drop-down-childs">
            {this.props.children}
          </div>
        </div>
    );
  }
}
