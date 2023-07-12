
import './Nft_Card.css';

export default function Nft_Card(props){

    const image = './../res/' + props.image;
    const artistPhoto = './../res/' + props.artistPhoto;

    return (
        <div class='nft_card'>
            <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder@2x.png' />
            <div className='NFT_info'>
                <h1>{props.title}</h1>
                <div className="artist_info">
                    <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png' />
                    <h2>{props.artist}</h2>
                </div>
                <div className='others_infos'>
                    <div class='others_infos_subs'>
                        <h3>Price</h3>
                        <p>{props.price} ETH</p>
                    </div>
                    <div className='others_infos_subs'>
                        <h3>Highest Bid</h3>
                        <p>{props.highestBid} wETH</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
