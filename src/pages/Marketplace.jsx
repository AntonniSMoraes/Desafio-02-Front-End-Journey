
import './Marketplace.css';
import NftCard from '../commons/NftCard';
import React, { useState } from "react";
import {collectionsDummyData} from '../commons/collectionsDummyData';
import Card from '../commons/ColectionCard';

export default function Marketplace(props){

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
    let nftGalleryContent = null;
    if(barFocus === 0){
        nftGalleryContent = props.nfts.map(nftCard =>
            <NftCard key={nftCard.id}
                id={nftCard.id}
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
                id={collection.id}
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
        <div id='marketplace_page'>
            <section id='browser_section'>
                <h1>Browse Marketplace</h1>
                <p>Browse through more than 50k NTFs on the NTF Marketplace.</p>
                <div className='my_form'>
                    <input type='text' placeholder='Search your favorite NFTs' />
                    <img src={require('../res/magnifying-glass.png')} alt='' />
                </div>
            </section>
            <section className='search_nft_selector'>
                <button onClick={handleClick} id='Nfts_bar' className='titles' style={nftBarStyle}>
                    Nfts<span>{props.nfts.length}</span>
                </button>
                <button onClick={handleClick} id='collections_bar' className='titles' style={collectionBarStyle}>
                    Collections<span>{collectionsDummyData.length}</span>
                </button>
            </section>
            <section className='nft_gallery'>
                <div className='nft_gallery_container'>
                    {nftGalleryContent}
                </div>
            </section>
        </div>
    );
}
