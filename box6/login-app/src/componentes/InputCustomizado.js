import React, { Component } from 'react';

export default class InputCustomizado extends Component{

    render() {
        return(
          <div >
    
            <input id={this.props.id} className={this.props.className} type={this.props.type} name={this.props.nome} value={this.props.value} onChange={this.props.onChange} placeholder = {this.props.placeholder}/>
          </div>
      );
    }
}    