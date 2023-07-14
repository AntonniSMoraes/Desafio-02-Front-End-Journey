
import './Marketplace.css';
import NftCard from '../commons/NftCard';
import React, { useState } from "react";

export default function Marketplace(props){

    const collectionsDummyData = [
        {
            id: '1',
            title: 'bubble 1',
            image: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-65@2x.png',
            artist: 'Brandie Cooke',
            artistPhoto: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png',
            price: 50,
            highestBid: 100,
        },
        {
            id: '2',
            title: 'indulge 2',
            image: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-72@2x.png',
            artist: 'Harvey Velazquez',
            artistPhoto: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png',
            price: 50,
            highestBid: 100,
        },
        {
            id: '3',
            title: 'credit 1',
            image: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-65@2x.png',
            artist: 'Frederic Huber',
            artistPhoto: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png',
            price: 50,
            highestBid: 100,
        },
        {
            id: '4',
            title: 'Teste 1',
            image: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-72@2x.png',
            artist: 'Buddy Braun',
            artistPhoto: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png',
            price: 50,
            highestBid: 100,
        },
    ];

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
        nftGalleryContent = new Array();
        for(let i = 0; i < props.nfts.length; i++) {
            let nftCard = props.nfts[i];
            let artistPhotoObj = props.artists.find(element => element.name === nftCard.artist);
            let card = <NftCard 
                title={nftCard.name} 
                image={nftCard.image} 
                artist={nftCard.artist}
                artistPhoto={artistPhotoObj.photo} 
                price={nftCard.price} 
                highestBid={nftCard.highestBid} />;
            nftGalleryContent.push(card);
        }
    }
    else{
        nftGalleryContent = collectionsDummyData.map(nftCard => (
            <NftCard 
                title={'@@COLLECTION'} 
                image={'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-65@2x.png'} 
                artist={'collection'} 
                artistPhoto={nftCard.artistPhoto} 
                price={nftCard.price} 
                highestBid={nftCard.highestBid} />
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
                <section className='nft_gallery_container'>
                    {nftGalleryContent}
                </section>
            </section>
        </div>
    );
}
