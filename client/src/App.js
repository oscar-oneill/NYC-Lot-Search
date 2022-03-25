import './App.css';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './routes/Main';
import Violations from './routes/Violations'
import Repairs from './routes/Repairs'
import Complaints from './routes/Complaints';
import { AppContextProvider } from './Context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <Navigation/>
          <Route path="/" exact component={Main}/>
          <Route path="/violations" exact component={Violations}/>
          <Route path="/repairs" exact component={Repairs}/>
          <Route path="/complaints" exact component={Complaints}/>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
