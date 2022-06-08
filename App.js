import Addsong from './Addsong';
// import {BrowserRouter as Router, Switch ,Route, Redirect} from 'react-router-dom';
import './App.css';

import Home from "./Home";



const App=()=> {
  return (
  <>
  <div className='App'>
     <Home/>
     {/* <Router><Switch>
     <Route path='/home' component={Home}/>
                <Route path='/Addsong' component={Addsong}/>
                <Redirect to="/"/>
                </Switch>
                </Router> */}
     <Addsong/>
    
    
  
      </div>
    </>
  );
}

export default App;