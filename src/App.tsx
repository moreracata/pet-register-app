import './Main/Style/Content.css';
import Menu from './Main/Menu';
import Content from './Main/Content';
import Footer from './Main/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config'
import configureValidations from './Validations';


configureValidations();

function App() {
  
  return (
    <BrowserRouter>
      <Menu />
      <Content/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
