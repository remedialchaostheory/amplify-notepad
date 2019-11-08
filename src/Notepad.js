import React, { Component } from 'react';

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id:1,
          note: "hello stone world",
        },
      ]
    };
  }
  render() {
    return (
        <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
          <h1 className="code f2-l">Notepad</h1>
        </div>
    );
  }

}

export default Notepad;
