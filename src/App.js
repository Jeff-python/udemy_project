import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters:[]
      
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters:users}));

  }
  render(){
    return (
      <div className="App">
       
          <CardList monsters={this.state.monsters}>
          
          </CardList>
          <p>{this.state.string}</p>
          <button onClick ={()=>this.setState({string:'hello andre'})}>Change Text</button>
        
      </div>
    );
  }
  
}

export default App;
