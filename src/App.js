
import './App.css';
import Header from './commons/Header';
import Main from './main-page/Main';
import Marketplace from './marketplace/Marketplace';
import Footer from './commons/Footer';
import { useState, useEffect } from 'react';

export default function App() {

  // URI base para requisição HTTP
  const ARTISTS_URI = 'https://nftdatabase-703d2-default-rtdb.firebaseio.com/data/artists.json';
  const NFTS_URI = 'https://nftdatabase-703d2-default-rtdb.firebaseio.com/data/nfts.json';

  // Requisição HTTP com hook useEffect
  const [artists, setArtists] = useState([]);
  const [nfts, setNfts] = useState([]);

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

   // atribuição do resultado da requisição às devidas variáveis
  //   let artistsData = data.artists;
  //  let NFTsData = data.ntfs;

    return (
      <div>
        <Header />
        <Main />
        <Marketplace nfts={nfts} artists={artists} />
        {/* 
        <section className='footer_section'>
          <Footer /> 
        </section> */}
      </div>
  );
}
