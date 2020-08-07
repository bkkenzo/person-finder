import React from "react";
import data from "./../../public/mock-data"
import Person from "./Person"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      searchResult: data.slice(0, 10)
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let name = e.target.value
    name = name.trim().toLowerCase()

    const searchResult = data.filter(
      el => el.name.toLowerCase()
      .includes(name)
    )

    if (name === '' ) this.setState({searchResult: data.slice(0, 10)})
    else this.setState({searchResult: searchResult})
  }

  render() {

    return (
      <div>

        <h1>The Person Finder</h1>

        <p>
          If you just can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you are looking for below inot the search box!
        </p>

        <form>
          <input type="text" id="name" name="name" placeholder="Type a name" onChange={this.handleChange} />
        </form>

        {
          this.state.searchResult.map( (el, idx) => <Person key={idx} person={el} />)
        }
      </div>
    )
  }
}

export default App
