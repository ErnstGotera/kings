import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Thanks from './pages/Thanks';
import { Switch, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/thanks/:name' component={Thanks} />
      </Switch>
    </>
  );
}

export default App;
