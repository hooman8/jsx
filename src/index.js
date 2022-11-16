// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
// Get reference to the div with ID root
const el = document.getElementById("root");
// Tell React to take control of that element
const root = ReactDOM.createRoot(el);
// Create a component
function App() {
  //   const date = new Date();
  //   const time = date.toLocaleTimeString();
  //   return <input type="number" min={5} />;
  return (
    <textarea
      readOnly
      maxLength={3}
      spellCheck
      style={{ backgroundColor: "gray" }}
    />
  );
}
// Show the component on the screen
root.render(<App />);
