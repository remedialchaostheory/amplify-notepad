import React from 'react';
import Notepad from "./Notepad";
import './App.css';
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react";

function App() {
  console.dir(AmplifyTheme);

  return (
    <div>
      <Notepad />

    </div>
  );
}

const theme = { ...AmplifyTheme };

export default withAuthenticator(App, true, [], null, theme);
