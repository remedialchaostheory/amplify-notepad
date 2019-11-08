import React, { Component } from 'react';

class NoteForm extends Component {
  // TODO - center only form field instead of both form and button
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="fl w-100 w-35-ns avenir">
          <form
              className="mb3 fr mr4"
              onSubmit={this.props.handleAddNote}>
            <input
                type="text"
                className="pa1 f4 br2"
                placeholder="Write your note here"
                onChange={this.props.handleChangeNote}
                value={this.props.form}
            />
            <button
                className={`pa1 f4 ml1 br4 br--right ${this.props.isHovered && 'dim bg-washed-green'}`}
                onMouseEnter={this.props.handleHover}
                onMouseLeave={this.props.handleHover}
                type="submit">
                Add <span className="f3">&#8669;</span>
            </button>
          </form>
        </div>
    )
  }

}

export default NoteForm;
