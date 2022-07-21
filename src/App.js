
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemproduct1 from './components/Itemproducts/itemproduct1';

function App() {
  const styleApp = { padding: '10px 20px', marginTop: 10}
  return (
    //JSX
    <div classname="Product list"> 
      <div classname="NavBar">
        <div className="App" Style={styleApp}>
          <h1>Hall of fame</h1>
          <img src="/assets/Logo.jpg" alt="Logo"/>
        </div>
        <NavBar />
      </div>
      <Itemproduct1 title="Munchkin" price="4500" img="munchkin.jpg"/>
    </div>
  );
}

export default App;
