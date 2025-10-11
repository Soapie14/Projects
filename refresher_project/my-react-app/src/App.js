import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <Welcome name="Sophie"/>

      <p>We can start a react app by cd my-react-app and using npm start. </p>
      <p>We can stop it by using ctrl + c in the terminal
      </p>
    </div>
  );
}

export default App;
