import ReactDOM from 'react-dom/client';
import './Css/style.css'
import Header from './Layout/Header';
import MainComponent from './Main';
import Footer from './Layout/Footer';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header/>
    <MainComponent/>
    <Footer/>
  </div>
)

