import React, { Component } from 'react';
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { API, graphqlOperation } from "aws-amplify";
import {createNote, deleteNote} from "./graphql/mutations";
import { listNotes } from "./graphql/queries";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      form: "",
      isHovered: false,
    };
    this.updateNotes = this.updateNotes.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleChangeNote = this.handleChangeNote.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  async componentDidMount() {
    const resp = await API.graphql(graphqlOperation(listNotes));
    const updatedNotes = resp.data.listNotes.items;
    this.setState({ notes: updatedNotes })
  }

  updateNotes = newNote => {
    console.log('newNote ->', newNote);
    console.log('this.state.notes ->', this.state.notes);
  };

  handleAddNote = async e => {
    // Need to keep this logic in NoteForm because form data needs to be submitted
    e.preventDefault();
    const input = { note: this.state.form };
    console.log('input ->', input);
    const resp = await API.graphql(graphqlOperation(createNote, { input: input }));
    console.log('resp ->', resp);
    const newNote = resp.data.createNote;
    console.log('newNote ->', newNote);
    this.setState({
      notes: [newNote, ...this.state.notes],
      form: "",
    });
  };

  handleEditNote(e) {

  }


  handleDeleteNote = async noteId => {
    const input = { id: noteId };
    const resp = await API.graphql(graphqlOperation(deleteNote, { input }));
    const deletedNoteId = resp.data.deleteNote.id;
    const updatedNotes = this.state.notes.filter(note => note.id !== deletedNoteId);
    this.setState({ notes: updatedNotes });
  };

  handleChangeNote(e) { this.setState({ form: e.target.value }) }

  handleHover(e) {
    this.setState(st => ({ isHovered: !st.isHovered }));
  }

  render() {
    return (
        <div className="flex flex-column items-center center mw8 pa3 vh-100 br4 bg-washed-yellow">
          <h1 className="avenir f2-l">Notepad</h1>
          <NoteForm
              form={this.state.form}
              handleAddNote={this.handleAddNote}
              updateNotes={this.updateNotes}
              handleEditNote={this.handleEditNote}
              handleChangeNote={this.handleChangeNote}
              handleHover={this.handleHover}
              isHovered={this.state.isHovered}
          />
          <NoteList
              notes={this.state.notes}
              handleEditNote={this.handleEditNote}
              handleDeleteNote={this.handleDeleteNote}
          />
        </div>
    );
  }

}

export default Notepad;
