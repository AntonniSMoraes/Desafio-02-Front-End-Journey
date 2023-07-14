
import './App.css';
import Header from './commons/Header';
import Main from './main-page/Main';
import Marketplace from './marketplace/Marketplace';
import Footer from './commons/Footer';

export default function App() {
    return (
      <div>
        <Header />
        <Main />
        
        {/* <Marketplace /> */}
        
        {/* <section className='footer_section'>
          <Footer /> 
        </section> */}
      </div>
  );
}
