import logo from './logo.svg';
import './App.css';
const handlefunc =() =>{
  const names=['prashanth','shakthi','vani'];
  const ival=Math.floor(Math.random() *3);
  return names[ival];
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HELLO {handlefunc()}</p>
         
      </header>
    </div>
  );
}

export default App;
