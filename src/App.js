import React from "react";
import "./App.css";

export default class App extends React.Component {
  newUser = () => {
    let username = "markitos";
    let password_digest = "c4tz";
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password_digest,
        }
      })
    })
  }

  render() {
    return ( 
      <div className="App">
        <div>
          <button className="button" onClick={this.newUser}>Test</button>
        </div>
      </div>
    );
  }
}

// export default App;
