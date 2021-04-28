import {Router} from '@reach/router'
import HomePage from './components/HomePage'
import './App.css';
import ShowNumber from './components/Number';
import WordRepeater from './components/WordRepeater'


function App() {

  const idConverter = (id) => {
    if(isNaN(id)) {
      id = parseInt()
    } 
  }



  

  return (
    <div className="App">
      <Router>
        <HomePage path="/Home"/>
        <ShowNumber path="Number/:id"/>
        <WordRepeater path=":word/:font/:backgrnd"/>
      </Router>
    </div>
  );
}

export default App;
