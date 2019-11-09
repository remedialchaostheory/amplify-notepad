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

const theme = {
  ...AmplifyTheme,
  nav: {
    ...AmplifyTheme.nav,
    // margin: '0',
  },
  navBar: {
    ...AmplifyTheme.navBar,
    // margin: '0',
    // padding: '0px 2px',
  }
};

export default withAuthenticator(App, true, [], null, theme);
