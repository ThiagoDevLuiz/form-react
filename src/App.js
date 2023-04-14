import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm user={{ name: "Pedro", email: "pedrosimplesmente@gmail.com"}}/>
    </div>
  );
}

export default App;
