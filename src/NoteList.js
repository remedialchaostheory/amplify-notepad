import React, { Component } from 'react';
import './NoteList.css';

class NoteList extends Component {
  // TODO - add strikethrough when deleted
  render() {
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
                    className={`list pa1 fa3 ${(this.props.isHoveredCross && note.id === this.props.hoveredNote) && "strike"}`}
                    onClick={() => this.props.handleEditNote(note)}
                >
                  {note.note}
                </li>
                {/* Delete */}
                <button
                    className="bg-transparent bn f4 grow-large"
                    onMouseEnter={this.props.handleHoverCross}
                    onMouseLeave={this.props.handleHoverCross}
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
