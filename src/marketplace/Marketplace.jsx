
import './Marketplace.css';
import Nft_Card from '../commons/Nft_Card';

export default function Marketplace(){
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
                    <Nft_Card title='Magic Mushroom 1' image='placeholder.png' artist='Artist 1' artistPhoto='placeholder.png' price='10' highestBid='5' />
                    <Nft_Card title='Magic Mushroom 2' image='placeholder.png' artist='Artist 2' artistPhoto='placeholder.png' price='10' highestBid='5' />
                    <Nft_Card title='Magic Mushroom 3' image='placeholder.png' artist='Artist 3' artistPhoto='placeholder.png' price='10' highestBid='5' />
                    <Nft_Card title='Magic Mushroom 4' image='placeholder.png' artist='Artist 4' artistPhoto='placeholder.png' price='10' highestBid='5' />
                    <Nft_Card title='Magic Mushroom 5' image='placeholder.png' artist='Artist 5' artistPhoto='placeholder.png' price='10' highestBid='5' />
                    <Nft_Card title='Magic Mushroom 6' image='placeholder.png' artist='Artist 6' artistPhoto='placeholder.png' price='10' highestBid='5' />
                    <Nft_Card title='Magic Mushroom 7' image='placeholder.png' artist='Artist 7' artistPhoto='placeholder.png' price='10' highestBid='5' />
                    <Nft_Card title='Magic Mushroom 8' image='placeholder.png' artist='Artist 8' artistPhoto='placeholder.png' price='10' highestBid='5' />
                </section>
            </section>
            <footer />
        </div>
    );
}
