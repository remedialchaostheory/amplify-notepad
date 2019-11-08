import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createNote } from "./graphql/mutations";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
    };
    this.handleChangeNote = this.handleChangeNote.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleChangeNote(e) { this.setState({ note: e.target.value }) }

  handleAddNote = async e => {
    e.preventDefault();
    const input = {
      note: this.state.note,
    };
    const resp = await API.graphql(graphqlOperation(createNote, { input: input }));
    const newNote = resp.data.createNote;
    this.props.updateNotes(newNote);
  };

  render() {
    return (
        <div className="avenir">
          <form className="mb3" onSubmit={this.handleAddNote}>
            <input
                type="text"
                className="pa2 f4 br2"
                placeholder="Write your note here"
                onChange={this.handleChangeNote}
            />
            <button className="pa2 f4 br4 br--right" type="submit">Add note</button>
          </form>
        </div>
    )
  }

}

export default NoteForm;
