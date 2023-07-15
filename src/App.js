
import './App.css';
import Header from './commons/Header';
import Main from './main-page/Main';
import Marketplace from './pages/Marketplace';
import Footer from './commons/Footer';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import CreateAccount from './pages/CreateAccount';

export default function App() {

  // URI base para requisição HTTP
  const ARTISTS_URI = 'https://nftdatabase-703d2-default-rtdb.firebaseio.com/data/artists.json';
  const NFTS_URI = 'https://nftdatabase-703d2-default-rtdb.firebaseio.com/data/nfts.json';

  // Estados que conterão os dados recebidos
  const [artists, setArtists] = useState([]);
  const [nfts, setNfts] = useState([]);

  // Requisição HTTP com hook useEffect
   useEffect(() => {
      fetch(ARTISTS_URI)
         .then((res) => res.json())
         .then((data) => {
            setArtists(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   useEffect(() => {
    fetch(NFTS_URI)
       .then((res) => res.json())
       .then((data) => {
          setNfts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
    }, []);


    /* Usar "nfts={nfts} artists={artists}" para passar os dados
    para o componente */
    return (
      <>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/marketplace' element={<Marketplace nfts={nfts} artists={artists}/>} />
          <Route path='/create-account' element={<CreateAccount />} />v
          <Route path='/connect-wallet' element={<Connect />} />
        </Routes>
      </>
  );
}


{/* <div>
        <Header />
        <Main />
        <section className='footer_section'>
          <Footer /> 
        </section>
        </div> */}
