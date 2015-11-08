import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{padding: '20px'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
