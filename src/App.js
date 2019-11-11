import React from 'react';
import Notepad from "./Notepad";
import './App.css';
import { withAuthenticator, Authenticator, AmplifyTheme, Greetings } from "aws-amplify-react";
import { Auth } from "aws-amplify";

function App() {
  // TODO - display email or username in navbar greeting
  let currUser;
  Auth.currentAuthenticatedUser()
      .then(user => {
        currUser = user.attributes.email;
      })
      .catch(err => console.log(err));

  return (
    <div>
      <Authenticator hideDefault={true}>
        <Greetings
            inGreeting={() => 'Welcome, ' + currUser}
            outGreeting="Please sign in..."
        />
      </Authenticator>

      <Notepad />

    </div>
  );
}

// class customGreetings extends

const theme = { ...AmplifyTheme };

export default withAuthenticator(App, false, [], null, theme);
