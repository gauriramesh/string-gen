/*
  Gauri Ramesh
  React Practice
*/


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
		
      this.state = {
         data: '',
         strings: []
      }

      this.updateState = this.updateState.bind(this);
      this.addStringHandler = this.addStringHandler.bind(this);
      this.add50StringHandler = this.add50StringHandler.bind(this);
      this.add100StringHandler = this.add100StringHandler.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   addStringHandler() {
     var item = this.state.data;
     var array = this.state.strings;
     array.push(item);
     this.setState({strings: array});
   };

   //TODO: Refactor this 
   add50StringHandler() {
    for(let i = 0; i < 50; i++) {
      this.addStringHandler();
    }
   };

    add100StringHandler() {
     for(let i = 0; i < 100; i++) {
        this.addStringHandler();
     }
   };

   render() {
      return (
         <div>
            <h1> String Generator </h1>
            <h4> Populate the page with whatever strings you want. </h4>
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} placeholder="Add string..." onFocus={(e) => e.target.placeholder = ""}  />
            <button onClick={this.addStringHandler}> Add String </button>
            <button onClick={this.add50StringHandler}> Add 50 Strings </button>
            <button onClick={this.add100StringHandler}> Add 100 Strings </button>
            <h4> {this.state.strings} </h4>
         </div>
      );
   }
}


export default App;
