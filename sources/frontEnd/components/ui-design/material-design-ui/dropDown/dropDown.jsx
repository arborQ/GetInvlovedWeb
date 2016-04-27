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

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, true)
    document.addEventListener('touchend', this.handleDocumentClick, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleDocumentClick, true)
    document.removeEventListener('touchend', this.handleDocumentClick, true)
  }

  showChildItems(){
    this.setState(Object.assign({}, this.state, { isOpen : true }));
  }

  render(){
    if(!this.props.triggerItem){
      throw "TriggerItem is required";
    }

    let dropDownItems = !this.props.children || !this.state.isOpen
    ? null
    : (
      <div className="drop-down-container">
        <div className="drop-down-childs">
          {this.props.children}
        </div>
      </div>
    );

    return (
        <div>
          <div onClick={() => { this.showChildItems(); }}>{this.props.triggerItem}</div>
          {dropDownItems}
        </div>
    );
  }
}
