import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const arrowSymbol = <span className="f3 br--right">&#8669;</span>;
    const cancelUpdateBtn = <button
        className="pa1 f4 br3 bg-near-white dim pointer"
        onClick={this.props.handleCancelUpdate}
    >Cancel</button>;
    return (
        <div className="NoteForm pa1 avenir">
          <form
              className=""
              onSubmit={this.props.handleAddNote}>
            <input
                type="text"
                className="NoteForm-input pa1 f4 br2"
                placeholder="Write your note here"
                onChange={this.props.handleChangeNote}
                value={this.props.form}
            />
            {this.props.isUpdate && cancelUpdateBtn}
            <button
                className={`NoteForm-button bg-white pa1 ph2 f4 ml1 br3 pointer ${this.props.isHoveredButton && 'bg-washed-green'}`}
                onMouseEnter={this.props.handleHoveredButton}
                onMouseLeave={this.props.handleHoveredButton}
                type="submit"
            >
              {this.props.isUpdate ? "Update " : "Add "}
              {this.props.isHoveredButton && arrowSymbol}
            </button>
          </form>
        </div>
    )
  }
}

export default NoteForm;
