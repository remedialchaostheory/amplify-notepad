import React from 'react';
import Notepad from "./Notepad";
import { withAuthenticator} from "aws-amplify-react";

function App() {
  return (
    <div>
      <Notepad />
    </div>
  );
}

export default withAuthenticator(App, true);
