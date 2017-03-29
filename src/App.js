import React, { Component } from 'react';
import './App.css';

const styles = {
  outer: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 50,
    height: 200,
    width: 200,
    border: '1px solid black',
  },
  inner: {
    padding:0,
    position: 'absolute',
    top: 100,
    left: 0,
    width: 160,
    marginLeft: 20,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1px solid black',
    borderRadius: 0,
    marginRight: 30,
    fontSize: '2.6em',
    textAlign: 'center',
    backgroundColor: 'transparent',
    outline: 'none',
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.outer}>
          <input style={styles.inner} />
        </div>
      </div>
    );
  }
}

export default App;
