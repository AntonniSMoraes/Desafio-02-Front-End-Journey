
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./NftPage.css";
import NftCard from "../commons/NftCard";
import {collectionsDummyData} from '../commons/collectionsDummyData';
import Card from '../commons/ColectionCard';

import './ArtistPage.css';

export default function ArtistPage(props) {

    // Busca a informação acerca do artista na API
    const { slug } = useParams();
    const URI = `https://nftdatabase-703d2-default-rtdb.firebaseio.com/data/artists.json?orderBy="id"&equalTo=${slug}`;
    const [payload, setPayload] = useState({});

    useEffect(() => {
        fetch(URI)
            .then(res => res.json())
            .then(data => setPayload(data[slug - 1]))
            .catch(err => console.log(err.message));
    }, [payload, slug, URI]);

     // 'barFocus' define qual barra está selecionada, se 'NFT' ou 'Collections'
     const [barFocus, setBarFocus] = useState(0);

     // Altera a barra mostrada
     function handleClick(event){
         const clicked = event.currentTarget.id;
         if(barFocus === 1 && clicked === 'Nfts_bar'){
             setBarFocus(0);
         }
         else if(barFocus === 0 && clicked === 'collections_bar'){
             setBarFocus(1);
         }
     }
   
     // Determina o que será mostrado na galeria, se as NFTs ou as Collections
     let nftGalleryContent;
     const artistRelatedWork = props.nfts.filter(nft => nft.artist === payload.name); // Busca os outros trabalhos do artista
     if(barFocus === 0){
        nftGalleryContent = artistRelatedWork.map(nftCard =>
            <NftCard key={nftCard.id}
                        title={nftCard.name} 
                        image={nftCard.image} 
                        artist={nftCard.artist}
                        artistPhoto={nftCard.artistPhoto} 
                        price={nftCard.price} 
                        highestBid={nftCard.highestBid} />  
        );
     }
     else{
         nftGalleryContent = collectionsDummyData.map(collection => (
             <Card key={collection.id}
                 nomeArtista={collection.nomeArtista}
                 imagemPrincipal={collection.imagemPrincipal}
                 imagemPqna1={collection.imagemPqna1}
                 imagemPqna2={collection.imagemPqna2}
                 quantidadeImagens={collection.quantidadeImagens}
                 nomePasta={collection.nomePasta}
                 imagemAvatar={collection.imagemAvatar}
           />
         ));
     }
 
     // Define o border-bottom dos botões da galeria
     const borderStyles = {
         noBorder: {
             borderBottom: 'none'
         },
         selectedBorder: {
             borderBottom: '2px solid gray'
         }
     };
 
     // Estabele os styles para margin-bottom dos conteiners
     let nftBarStyle, collectionBarStyle;
     if(barFocus === 0){
         nftBarStyle = borderStyles.selectedBorder;
         collectionBarStyle = borderStyles.noBorder;
     }
     else{
         nftBarStyle = borderStyles.noBorder;
         collectionBarStyle = borderStyles.selectedBorder;
     }

    return (
        <div id='artist_page'>
            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-4@1x.png' alt='NFT' />
            <div className='ap-top'>
                <div className='ap-top_left'>
                    <img src={payload.photo} alt='artist photo' />
                    <div className='ap_name_wallet'>
                        <h1>{payload.name}</h1>
                        <div className='ap_wallet_buttons'>
                            <button className='border-button'>
                                <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/copy@2x.svg' alt='' />
                                <h3>0xc0E3...B79C</h3>
                            </button>
                            <button className='no-border'>
                                <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/plus@2x.svg' alt='' />
                                <h3>Follow</h3>
                            </button>
                        </div>
                    </div>
                    <div className='artist-sub-info'>
                        <h3><span className='ap-top_span'>{payload.volume + "k+"}</span><br />Volume</h3>
                        <h3><span className='ap-top_span'>{payload.totalSales + "+"}</span><br />Nfts Sold</h3>
                        <h3><span className='ap-top_span'>{payload.followers + "+"}</span><br />Followers</h3>
                    </div>
                    <h3>Bio</h3>
                    <p>{payload.bio}</p>
                    <h3>Links</h3>
                    <div className='ap_links'>
                        <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/globe@2x.svg' alt='' />
                        <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/discordlogo-7@2x.svg' alt='' />
                        <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/youtubelogo-7@2x.svg' alt='' />
                        <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/twitterlogo@2x.svg' alt='' />
                        <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/instagramlogo@2x.svg' alt='' />
                    </div>
                </div>
            </div>
            <section className='artists_pg_search_nft_selector'>
                <button onClick={handleClick} id='Nfts_bar' className='artists_pg_titles' style={nftBarStyle}>
                    Nfts<span>{artistRelatedWork.length}</span>
                </button>
                <button id='Owned_bar' className='artists_pg_titles' style={borderStyles.noBorder}>
                    Owned<span>1</span>
                </button>
                <button onClick={handleClick} id='collections_bar' className='artists_pg_titles' style={collectionBarStyle}>
                    Collections<span>{collectionsDummyData.length}</span>
                </button>
            </section>
            <section className='artists_pg_nft_gallery'>
                <div className='artists_pg_nft_gallery_container'>
                    {nftGalleryContent}
                </div>
            </section>
        </div>
    );
}
