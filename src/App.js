
import './App.css';
import NavBar from './components/NavBar/NavBar';
import itemproduct from './components/Itemproducts/itemproduct1';

function App() {
  const styleApp = { padding: '10px 20px', maginTop: 10}
  return (
    //JSX
    <div> 
      <div className="Logo" Style={styleApp}>
        <h1>Hall of fame</h1>
        <img src="/assets/Logo.jpg" alt="Logo"/>
      </div>
      <div classname="NavBar">
        <NavBar />
      </div>
      <div classname="listproducts">
        <itemproduct />
      </div>    
    </div>
  );
}

export default App;
