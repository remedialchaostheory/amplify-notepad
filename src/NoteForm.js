import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  // TODO - add cancel update button ?
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const arrowSymbol = <span className="f3 br--right">&#8669;</span>;
    return (
        <div className="NoteForm pa1 avenir">
          <form
              className=""
              onSubmit={this.props.handleAddNote}>
            <input
                type="text"
                className="NoteForm-input pa1 f4 br2"
                placeholder="Write your note here"
                onChange={this.props.handleChangeNote} // TODO - rename this or add a relevant comment
                value={this.props.form}
            />
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
