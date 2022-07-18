
import './App.css';
import NavBar from './components/NavBar/NavVar';

function App() {
  const styleApp = { padding: '10px 20px', maginTop: 10}
  return (
    //JSX
    <div className="App" Style={styleApp}>
      <h1>Hall of fmae</h1>
      <NavBar />
    </div>
  );
}

export default App;
