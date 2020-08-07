import React from "react";

class Person extends React.Component {

  render() {
    const person = this.props.person

    return (
      <div id="person">
        <img src={person.avatar} alt="Avatar" className="avatar" />
        <div id="info">
          <h4>{person.name}</h4>
          <p>{person.description}</p>
        </div>
      </div>
    )
  }
}

export default Person
