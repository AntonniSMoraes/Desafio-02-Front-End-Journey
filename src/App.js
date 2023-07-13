
import logo from './logo.svg';
import './App.css';
import Marketplace from './marketplace/Marketplace';
import Footer from './commons/Footer';
import Header from './commons/Header';

export default function App() {
    return (
      <div>
        <Header />
        <Marketplace />
        <section className='footer_section'>
          <Footer />
        </section>
      </div>
  );
}
