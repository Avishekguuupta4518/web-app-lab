// Design and develop a React component that contains a password input field along with a “Show / Hide” toggle button. When the user clicks the button, the password field should switch dynamically between hidden and visible states. The button text should also update accordingly. Use React state to manage the visibility of the password.

import React from "react";
import PasswordToggle from "./component/PasswordToggle";

function App() {
  return <PasswordToggle />;
}

export default App;