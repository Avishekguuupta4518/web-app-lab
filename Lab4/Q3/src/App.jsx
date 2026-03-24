// Design a React application where a parent component maintains a list of items in its state and passes the list along with add and delete functions to a child component using props. The child component should display the list and allow users to modify it through the provided buttons.

import React from "react";
import Parent from "./component/Parent";

function App() {
  return <Parent />;
}

export default App;