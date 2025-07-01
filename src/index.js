import ReactDOM from 'react-dom/client';
import './Css/style.css'
import Header from './Header';
import MainComponent from './Main';
import Footer from './Footer';
import Student from './Student';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header/>
    <MainComponent/>
    <div className="row"> Student Enrolled</div>
    <Student expreience={3} name="Mohamed Abdelaleem"/>
    <Student expreience={13} name="Mohamed Moshrif"/>
    <Student expreience={5} name="Ali Hassan"/>
    <Footer/>
  </div>
)

