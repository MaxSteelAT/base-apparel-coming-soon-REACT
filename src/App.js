import './App.css';

function App() {
  const appName = 'Application React JS'

  const exampleClick = () => {
    console.log('Click')
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>{appName}</h1>
        <button onClick={exampleClick} style={{ marginTop: '100px' }}>Click</button>
      </div>
    </div>
  );
}

export default App;
