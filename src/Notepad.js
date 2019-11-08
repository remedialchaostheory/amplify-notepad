import React, { Component } from 'react';
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          note: "hello stone world",
        },
      ]
    };
  }
  render() {
    return (
        <div className="flex flex-column items-center justify-center pa3 bg-washed-yellow">
          <h1 className="avenir f2-l ">Notepad</h1>
          <NoteForm />
          <NoteList notes={this.state.notes}/>
        </div>
    );
  }

}

export default Notepad;
