import React, { Component } from 'react';

class NoteForm extends Component {
  // TODO - center only form field instead of both form and button
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const arrowSymbol = <span className="f3 br4 br--right">&#8669;</span>;
    return (
        <div className="fl w-100 w-35-ns avenir">
          <form
              className="mb3 fr mr4"
              onSubmit={this.props.handleAddNote}>
            <input
                type="text"
                className="pa1 f4 br2"
                placeholder="Write your note here"
                onChange={this.props.handleChangeNote} // TODO - rename this or add a relevant comment
                value={this.props.form}
            />
            <button
                className={`pa1 f4 ml1 br3 ${this.props.isHoveredButton && 'dim bg-washed-green'}`}
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
