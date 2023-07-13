
import logo from './logo.svg';
import './App.css';
import Marketplace from './marketplace/Marketplace';
import Footer from './commons/Footer';

export default function App() {
    return (
      <div>
        <Marketplace />
        <section className='footer_section'>
          <Footer />
        </section>
      </div>
  );
}
