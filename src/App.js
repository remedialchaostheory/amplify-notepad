import React from 'react';
import Notepad from "./Notepad";
import './App.css';
import { withAuthenticator, Authenticator, AmplifyTheme, Greetings } from "aws-amplify-react";

function App() {
  return (
    <div>
      <Authenticator hideDefault={true}>
        <Greetings
            inGreeting={(username) => 'Yo ' + username}
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
