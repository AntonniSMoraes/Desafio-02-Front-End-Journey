
import './Marketplace.css';
import NftCard from '../commons/NftCard';
import React, { useState } from "react";

export default function Marketplace(){

    const dummy_data = [
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
        {
            id: '5',
            title: 'Teste 2',
            image: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-65@2x.png',
            artist: 'Morton Abbott',
            artistPhoto: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png',
            price: 50,
            highestBid: 100,
        },
        {
            id: '6',
            title: 'Teste 3',
            image: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-72@2x.png',
            artist: 'Julianne Patrick',
            artistPhoto: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-121@2x.png',
            price: 50,
            highestBid: 100,
        },
        {
            id: '7',
            title: 'Teste 4',
            image: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-72@2x.png',
            artist: 'Carolyn Potts',
            artistPhoto: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png',
            price: 50,
            highestBid: 100,
        },
        {
            id: '8',
            title: 'Teste 5',
            image: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-65@2x.png',
            artist: 'Myles Jacobson',
            artistPhoto: 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png',
            price: 50,
            highestBid: 100,
        }
    ];

    // 'barFocus' define qual barra está selecionada, se 'NFT' ou 'Collections'
    const [barFocus, setBarFocus] = useState(1);

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
    const derived = dummy_data.slice(1, 4);
    if(barFocus === 0){
        nftGalleryContent = dummy_data.map(nftCard => (
            <NftCard 
                title={nftCard.title} 
                image={nftCard.image} 
                artist={nftCard.artist} 
                artistPhoto={nftCard.artistPhoto} 
                price={nftCard.price} 
                highestBid={nftCard.highestBid} />
        ));
    }
    else{
        nftGalleryContent = derived.map(nftCard => (
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
                    Nfts<span>{dummy_data.length}</span>
                </button>
                <button onClick={handleClick} id='collections_bar' className='titles' style={collectionBarStyle}>
                    Collections<span>{derived.length}</span>
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
