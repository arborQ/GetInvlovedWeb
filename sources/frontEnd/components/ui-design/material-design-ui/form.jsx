import * as React from 'react';

export default class formContainer extends React.Component {

  submitForm(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.onSubmit();
  }

  render(){
    if(!this.props.children || !this.props.onSubmit){
      throw "Form require 'children' and 'onSubmit'";
      return null;
    }
    return (
        <form onSubmit={this.submitForm.bind(this)}>
          {this.props.children}
        </form>
    );
  }
}
