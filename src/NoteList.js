import React, { Component } from 'react';

class NoteList extends Component {
  render() {
    return (
        <div className="sans-serif">
          {this.props.notes.map(note => (
              <div key={note.id} className="flex items-center">
                <li className="list pa1 fa3">
                  {note.note}
                </li>
                <button className="bg-transparent bn f4">
                  <span>&times;</span>
                </button>
              </div>
          ))}
        </div>
    )
  }

}

export default NoteList;
