import React from "react";

// Function Component
function Student() {
  return (
    <div>
      <h2>Student Component</h2>
      <p>Name: Dedeepya</p>
      <p>Course: Computer Science</p>
    </div>
  );
}

// Class Component
class College extends React.Component {
  render() {
    return (
      <div>
        <h2>College Component</h2>
        <p>Welcome to our college.</p>

        {/* Nesting Function Component inside Class Component */}
        <Student />
      </div>
    );
  }
}

// Main Function Component
function App() {
  return (
    <div>
      <h1>Creating and Nesting Components</h1>

      {/* Nesting Class Component inside Function Component */}
      <College />
    </div>
  );
}

export default App;