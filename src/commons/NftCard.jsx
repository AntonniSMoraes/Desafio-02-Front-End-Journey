
import './NftCard.css';

export default function Nft_Card(props){
    return (
        <div class='nft_card'>
            <img src={props.image}  alt=''/>
            <div className='NFT_info'>
                <h1>{props.title}</h1>
                <div className="artist_info">
                    <img src={props.artistPhoto}  alt=''/>
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