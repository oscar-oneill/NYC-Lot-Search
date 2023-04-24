import { AppContextProvider } from './Context/AppContext'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Violations from './routes/Violations/Violations'
import Repairs from './routes/Repairs/Repairs'
import Complaints from './routes/Complaints/Complaints'
import Infestations from './routes/Infestations/Infestations'
import Liens from './routes/Liens/Liens'
// import Restaurants from './routes/Restaurants/Restaurants'
import Tips from './routes/Tips/Tips'
import Home from './routes/Home/Home'
import Navigation from './Components/Navigation/Navigation'
import ScrollToTop from './utilities/ScrollToTop'

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <ScrollToTop/>
          <Navigation/>
          <Route path="/" exact component={Home} />
          <Route path="/violations" exact component={Violations} />
          <Route path="/repairs" exact component={Repairs} />
          <Route path="/complaints" exact component={Complaints} />
          <Route path="/infestations" exact component={Infestations} />
          <Route path="/taxliens" exact component={Liens} />
          {/* <Route path="/restaurants" exact component={Restaurants} /> */}
          <Route path="/tips" exact component={Tips} />
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
