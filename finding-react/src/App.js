import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import SavedList from './components/savedlist';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      results: [],
      saved: []
    })
  }

  updateState(places) {
    this.setState({
      results:places
    })
  }

  saveListState(name) {
    const places = this.state.saved.concat(name);
    // Again change the state in to places
    this.setState({
      saved:places
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Search Nearby Places</h3>
        <section className="row"> 
          <Search resultPlaces={this.state.results} callUpdate={this.updateState.bind(this)} saveList={this.saveListState.bind(this)}/>
          <SavedList savedPlaces={this.state.saved} />
        </section> 
      </div>
    );
  }
}

export default App;
