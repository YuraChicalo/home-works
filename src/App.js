import './App.css';
import Menu from "./components/menu/Menu";
import General from "./components/generel/Generel";





let simpsons = [
  {
    name: 'yura',
    surname: 'chicalo',
    age: 20,
    city: 'Lviv'
  },
  {
    name: 'ivan',
    surname: 'chicalo',
    age: 21,
    city: 'Lviv'
  },
  {
    name: 'stepan',
    surname: 'chicalo',
    age: 22,
    city: 'Lviv'
  }
]

function App() {
  return (
    <div>
      <Menu/>
      <General items = {simpsons}/>
    </div>
  );
}

export default App;
