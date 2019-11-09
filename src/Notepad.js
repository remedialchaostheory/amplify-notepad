import React, { Component } from 'react';
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { API, graphqlOperation } from "aws-amplify";
import { createNote, deleteNote, updateNote } from "./graphql/mutations";
import { listNotes } from "./graphql/queries";
import { onCreateNote, onDeleteNote, onUpdateNote } from "./graphql/subscriptions";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      id: "",
      form: "",
      isHovered: false,
    };
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
    this.handleUpdateNote = this.handleUpdateNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleChangeNote = this.handleChangeNote.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.getNotes = this.getNotes.bind(this);
  }

  componentDidMount() {
    this.getNotes();

    this.createNoteListener = API.graphql(graphqlOperation(onCreateNote)).subscribe({
      next: noteData => {
        const newNote = noteData.value.data.onCreateNote;
        const prevNotes = this.state.notes.filter(note => note.id !== newNote.id);
        const updatedNotes = [...prevNotes, newNote];
        this.setState({ notes: updatedNotes });
      }
    });

    this.deleteNoteListener = API.graphql(graphqlOperation(onDeleteNote)).subscribe({
      next: noteData => {
        const deletedNote = noteData.value.data.onDeleteNote;
        const updatedNotes = this.state.notes.filter(note => note.id !== deletedNote.id);
        this.setState({ notes: updatedNotes });
      }
    });

    this.updateNoteListener = API.graphql(graphqlOperation(onUpdateNote)).subscribe({
      next: noteData => {
        const updatedNote = noteData.value.data.onUpdateNote;
        const index = this.state.notes.findIndex(note => note.id === updatedNote.id);
        const updatedNotes = [
          ...this.state.notes.slice(0, index),
          updatedNote,
          ...this.state.notes.slice(index + 1)
        ];
        this.setState({
          notes: updatedNotes,
          id: "",
          form: "",
        });
      }
    })
  }

  componentWillUnmount() {
    this.createNoteListener.unsubscribe();
    this.deleteNoteListener.unsubscribe();
    this.updateNoteListener.unsubscribe();
  }

  getNotes = async () => {
    const resp = await API.graphql(graphqlOperation(listNotes));
    const updatedNotes = resp.data.listNotes.items;
    this.setState({ notes: updatedNotes })
  };

  hasExistingNote = () => {
    if (this.state.id) {
      const isNote = this.state.notes.findIndex(note => note.id === this.state.id) > -1;
      return isNote;
    }
    return false;
  };

  handleAddNote = async e => {
    e.preventDefault();
    if (this.hasExistingNote()) {
      this.handleUpdateNote();
    } else {
      const input = { note: this.state.form };
      await API.graphql(graphqlOperation(createNote, { input: input }));
      this.setState({
        form: "",
      });
    }
  };

  handleUpdateNote =  async () => {
    const input = {
      id: this.state.id,
      note: this.state.form,
    };
    await API.graphql(graphqlOperation(updateNote, {input: input }));
  };

  handleEditNote(e) {
    this.setState({
      form: e.note,
      id: e.id,
    });
  }


  handleDeleteNote = async noteId => {
    const input = { id: noteId };
    await API.graphql(graphqlOperation(deleteNote, { input }));
  };

  handleChangeNote(e) { this.setState({ form: e.target.value }) }

  handleHover(e) {
    this.setState(st => ({ isHovered: !st.isHovered }));
  }

  render() {
    return (
        <div className="center mw8 pa3 vh-100 br4 bg-washed-yellow">
          <h1 className="tc avenir">Notepad</h1>
          <div className="flex justify-center items-center">
            <NoteForm
                form={this.state.form}
                handleAddNote={this.handleAddNote}
                handleEditNote={this.handleEditNote}
                handleChangeNote={this.handleChangeNote}
                handleHover={this.handleHover}
                isUpdate={this.state.id}
                isHovered={this.state.isHovered}
            />
            <NoteList
                notes={this.state.notes}
                handleEditNote={this.handleEditNote}
                handleDeleteNote={this.handleDeleteNote}
            />
          </div>
        </div>
    );
  }

}

export default Notepad;
