
import './NftCard.css';

export default function Nft_Card(props){

    // Define a cor do background
    const backgroundOptions = {
        lightGray: {
            background: '#3B3B3B'
        },
        darkGray: {
            background: '#2B2B2B'
        }
    };

    let bgColor = backgroundOptions.darkGray;
    if(props.bgColor === 'lightGray'){
        bgColor = backgroundOptions.lightGray;
    }

    return (
        <div className='nft_card' style={bgColor}>
            <img src={props.image}  alt=''/>
            <div className='NFT_info'>
                <h1>{props.title}</h1>
                <div className="artist_info">
                    <img src={props.artistPhoto}  alt=''/>
                    <h2>{props.artist}</h2>
                </div>
                <div className='others_infos'>
                    <div className='others_infos_subs'>
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
