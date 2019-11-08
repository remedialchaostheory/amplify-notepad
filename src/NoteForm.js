import React, { Component } from 'react';

class NoteForm extends Component {
  render() {
    return (
        <div className="avenir">
          <form className="mb3">
            <input
                type="text"
                className="pa2 f4 br2"
                placeholder="Write your note here"
            />
            <button className="pa2 f4 br4 br--right" type="submit">Add note</button>
          </form>
        </div>
    )
  }

}

export default NoteForm;
