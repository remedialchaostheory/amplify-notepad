import React, { Component } from 'react';
import './NoteList.css';

class NoteList extends Component {
  render() {
    const strikeOnHoveredCross = noteId => (this.props.isHoveredCross && noteId === this.props.hoveredNote) && "strike";
    return (
        <div className="fl w-100 w-65-ns sans-serif">
          {this.props.notes.map(note => (
              <div
                  key={note.id}
                  className="flex items-center"
                  onMouseEnter={() => this.props.handleHoveredNote(note.id)}
                  onMouseLeave={() => this.props.handleHoveredNote("")}
              >
                <li
                    className={`list pa1 fa3 ${this.props.hoveredNote && "dim"} ${strikeOnHoveredCross(note.id)}`}
                    onClick={() => this.props.handleEditNote(note)}
                >
                  {note.note}
                </li>
                {/* Delete */}
                <button
                    className="bg-transparent bn f4 grow-large"
                    onMouseEnter={this.props.handleHoveredCross}
                    onMouseLeave={this.props.handleHoveredCross}
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
