function App() {
  const name = "Dedeepya";
  const course = "Computer Science";
  const year = 3;

  return (
    <div>
      <h1>Writing Markup with JSX</h1>

      <h2>Student Details</h2>

      <p>
        Hello, my name is <strong>{name}</strong>.
      </p>

      <p>
        I am studying <strong>{course}</strong>.
      </p>

      <p>
        I am currently in <strong>Year {year}</strong>.
      </p>

      <h3>JSX Features</h3>

      <ul>
        <li>HTML-like markup</li>
        <li>JavaScript expressions</li>
        <li>Components</li>
      </ul>

      <p>
        10 + 20 = <strong>{10 + 20}</strong>
      </p>
    </div>
  );
}

export default App;