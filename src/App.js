
import './App.css';
import './myStyle.css'

import {Switch,Route} from 'react-router-dom';
import Home from './component/pages/Home';
import Menu from './component/pages/Menu';
import SignIn from './component/pages/SignIn';
import SignUp from './component/pages/SignUp';
import Imag from './component/pages/imag';
import Default from './component/Default'




function App() {
  
  return (
    <div className="App">
      <div className = 'Home-page' style={{backgroundImage: 'url(images/mainBg.jpg)' ,backgroundsize: '100%' }}>
  
      
      <Switch>
        
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/menu" component = {Menu}/>
      <Route exact path = "/sign-in" component = {SignIn}/>
      <Route exact path = "/sign-up" component = {SignUp}/>
      <Route exact path = "/my-bag" component = {Imag}/>
      <Route component={Default} />
      
     
      </Switch>
      
      </div>
  

       
        
    </div>
  );
}

export default App;
