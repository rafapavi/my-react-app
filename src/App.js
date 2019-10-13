import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]
  }

  // Ng Init
  constructor(props) {
    super(props);
    console.log('App - Conny');
  }

  // After component is rendered to DOM
  componentDidMount() {
    // Good place to call Ajax
    console.log('App - Mounted');
  }

  handleDelete = counterId => {
      const counters = this.state.counters.filter((item) => item.id !== counterId);
      this.setState({ counters });
  }

  handleIncrement = counter => {
      const counters = this.state.counters.map((item) => {
          if (item.id === counter.id) {
              item.value += 1;
          }
          return item;
      });
      this.setState({ counters });
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      })
      this.setState({ counters });
  }

  render() {
    console.log('App - Rendered');

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter((i) => i.value > 0).length}/>
        <main className="container">
          <Counters onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counters={this.state.counters}/>
        </main>
      </React.Fragment>
    );
  }
  
}

export default App;
