import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Create from './components/Create/Create';
import About from './components/About/About';
// import Error from './components/Error';
// import Footer from './components/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Note from './components/Note/Note';

function App() {
  return (
    <div className="main">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component ={Main}></Route>
          <Route path='/about' component ={About}></Route>
          <Route path='/create' component ={Create}></Route>
          <Route exact path='/note/' component ={Note}></Route>
          <Route exact path='/note/:noteURL' component ={Note}></Route>
          <Route component ={Error}></Route>
        </Switch>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
