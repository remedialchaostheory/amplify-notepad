import React, { Component } from 'react';
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { API, graphqlOperation } from "aws-amplify";
import { deleteNote } from "./graphql/mutations";
import { listNotes } from "./graphql/queries";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.updateNotes = this.updateNotes.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  async componentDidMount() {
    const resp = await API.graphql(graphqlOperation(listNotes));
    const updatedNotes = resp.data.listNotes.items;
    this.setState({ notes: updatedNotes })
  }

  updateNotes = newNote => {
    this.setState({ notes: [newNote, ...this.state.notes] });
    console.log('newNote ->', newNote);
    console.log('this.state.notes ->', this.state.notes);
  };

  handleDeleteNote = async noteId => {
    const input = { id: noteId };
    const resp = await API.graphql(graphqlOperation(deleteNote, { input }));
    const deletedNoteId = resp.data.deleteNote.id;
    const updatedNotes = this.state.notes.filter(note => note.id !== deletedNoteId);
    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
        <div className="flex flex-column items-center center mw8 pa3 vh-100 br4 bg-washed-yellow">
          <h1 className="avenir f2-l">Notepad</h1>
          <NoteForm updateNotes={this.updateNotes}/>
          <NoteList notes={this.state.notes} handleDeleteNote={this.handleDeleteNote}/>
        </div>
    );
  }

}

export default Notepad;
