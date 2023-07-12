
import './Marketplace.css';
import Nft_Card from '../commons/Nft_Card';
import Footer from '../commons/Footer';

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

    return (
        <div id='marketplace_page'>
            <header />
            <section id='browser_section'>
                <h1>Browse Marketplace</h1>
                <p>Browse through more than 50k NTFs on the NTF Marketplace.</p>
                <div className='my_form'>
                    <input type='text' placeholder='Search your favorite NFTs' />
                    <img src={require('../res/magnifying-glass.png')} alt='foto temporária' />
                </div>
            </section>
            <section className='search_nft_selector'>
                <div className='titles'>
                    <h3>Nfts</h3>
                    <p>302</p>
                </div>
                <div className='titles'>
                    <h3>Collections</h3>
                    <p>67</p>
                </div>
            </section>
            <section className='nft_gallery'>
                <section className='nft_gallery_container'>
                    {dummy_data.map(nftCard => (
                        <Nft_Card 
                            title={nftCard.title} 
                            image={nftCard.image} 
                            artist={nftCard.artist} 
                            artistPhoto={nftCard.artistPhoto} 
                            price={nftCard.price} 
                            highestBid={nftCard.highestBid} />
                    ))}
                </section>
            </section>
            <section className='footer_section'>
                <Footer />
            </section>
        </div>
    );
}
