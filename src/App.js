import MainPage from './components/mainPage/mainPage';
import SelectionPage from './components/SelectionPage/SelectionPage';
import SplashScreen from './components/splashScreen/splashScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HelpfullLink from './components/helpfulLink/helpfulLink';
import OptionPageCard from './components/optionsPageCard/optionsPageCard';
import Detail from './components/detail/detail';

export default function App() {
  return <>
    <Router>
      <Route path='/otherLinks' exact> <HelpfullLink /></Route>
      <Route path='/type/:name' exact><MainPage /></Route>
      <Route path='/' exact> <SplashScreen></SplashScreen></Route>
      <Route path='/chooseOptions' exact><SelectionPage /></Route>
      <Route path='/detail' exact><Detail></Detail></Route>
    </Router>
  </>


}
