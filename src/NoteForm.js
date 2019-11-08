import React, { Component } from 'react';

class NoteForm extends Component {
  render() {
    return (
        <div>
          <form className="mb3">
            <input
                type="text"
                className="pa2 f4"
                placeholder="Write your note"
            />
            <button className="pa2 f4" type="submit">Add note</button>
          </form>
        </div>
    )
  }

}

export default NoteForm;
