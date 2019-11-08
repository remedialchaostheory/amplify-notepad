import React, { Component } from 'react';

class NoteList extends Component {
  // TODO - add grow to x onhover
  // TODO - add strikethrough when deleted
  render() {
    return (
        <div className="fl w-100 w-65-ns sans-serif">
          {this.props.notes.map(note => (
              <div key={note.id} className="flex items-center">
                <li
                    className="list pa1 fa3"
                    onClick={() => this.props.handleEditNote(note)}
                >
                  {note.note}
                </li>
                <button
                    className="bg-transparent bn f4"
                    onClick={() => this.props.handleDeleteNote(note.id)}
                >
                  <span>&times;</span>
                </button>
              </div>
          ))}
        </div>
    )
  }

}

export default NoteList;
