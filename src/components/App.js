import React from "react";


class App extends React.Component {
  render() {
    return (
      <div>

        <h1>The Person Finder</h1>

        <p>
          If you just can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you are looking for below inot the search box!
        </p>

        <form>
          <input type="text" id="name" name="name" placeholder="Type a name"/>
        </form>

      </div>
    )
  }
}

export default App
