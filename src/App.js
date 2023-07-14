
import './App.css';
import Header from './commons/Header';
import Main from './main-page/Main';
import Marketplace from './marketplace/Marketplace';
import Footer from './commons/Footer';

export default function App() {

  const ARTISTS_URL = 'https://nftdatabase-703d2-default-rtdb.firebaseio.com/artists.json';
  const NFTS_URL = 'https://nftdatabase-703d2-default-rtdb.firebaseio.com/nfts.json';

    return (
      <div>
        <Header />
        <Main />
        <Marketplace />
        {/* 
        <section className='footer_section'>
          <Footer /> 
        </section>*/}
      </div>
  );
}
