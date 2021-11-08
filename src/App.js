
import './App.css';
import './myStyle.css';
import './index.css';

import {Switch,Route} from 'react-router-dom';
import Home from './component/pages/Home';
import Menu from './component/pages/Menu';
import SignIn from './component/pages/SignIn';
import SignUp from './component/pages/SignUp';
import Mybag from './component/pages/Mybag';
import Default from './component/Default'




function App() {
  
  return (
    <div className="App">
      <div className = 'Container'>
  
      
      <Switch>
        
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/menu" component = {Menu}/>
      <Route exact path = "/sign-in" component = {SignIn}/>
      <Route exact path = "/sign-up" component = {SignUp}/>
      <Route exact path = "/my-bag" component = {Mybag}/>
      <Route component={Default} />
      
     
      </Switch>
      
      </div>
  

       
        
    </div>
  );
}

export default App;
