
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Header from './commons/Header';
import Footer from './commons/Footer';
import Main from './main-page/Main';
import Marketplace from './pages/Marketplace';
import ConnectWallet from './pages/ConnectWallet';
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
          <Route path='/' element={<><Header />  <Main nfts={nfts} artists={artists}/>  <Footer /></>} />
          <Route path='/marketplace' element={<><Header />  <Marketplace nfts={nfts} artists={artists}/>  <Footer /></>} />
          <Route path='/create-account' element={<><Header />  <CreateAccount />  <Footer /></>} />
          <Route path='/connect-wallet' element={<><Header />  <ConnectWallet />  <Footer /></>} />
        </Routes>
      </>
  );
}
