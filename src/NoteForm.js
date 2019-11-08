import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createNote } from "./graphql/mutations";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      isHovered: false,
    };
    this.handleChangeNote = this.handleChangeNote.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleChangeNote(e) { this.setState({ note: e.target.value }) }

  handleAddNote = async e => {
    // Need to keep this logic in NoteForm because form data needs to be submitted
    e.preventDefault();
    const input = { note: this.state.note };
    const resp = await API.graphql(graphqlOperation(createNote, { input: input }));
    const newNote = resp.data.createNote;
    this.props.updateNotes(newNote);
    this.setState({ note: "" });
  };

  handleHover(e) {
    this.setState(st => ({ isHovered: !st.isHovered }));
  }

  render() {
    return (
        <div className="avenir">
          <form
              className="mb3"
              onSubmit={this.handleAddNote}>
            <input
                type="text"
                className="pa2 f4 br2"
                placeholder="Write your note here"
                onChange={this.handleChangeNote}
                value={this.state.note}
            />
            <button
                className={`pa2 f4 ml1 br4 br--right ${this.state.isHovered && 'dim bg-washed-green'}`}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
                type="submit">
                Add <span className="f3">&#8669;</span>
            </button>
          </form>
        </div>
    )
  }

}

export default NoteForm;
